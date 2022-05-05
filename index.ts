import { SchemaField, SchemaFieldArg, SchemaPossibleType, SchemaTypes } from './types';

function padding(d: number, spaces = '  '): string {
  return d > -1 ? padding(d - 1, spaces) + spaces : '';
}

function serializeVariables(vars: Record<string, string>) {
  const entries = Object.entries(vars);
  if (!entries.length) return null;
  return entries.map(([key, value]) => ` $${key}: ${value}`).join('\n');
}

export default function genQuery(types: SchemaTypes, documentName: string, name: string, depthLimit = 2) {
  const variables: Record<string, string> = {};

  function serializeArgs(field: SchemaField | SchemaPossibleType | SchemaFieldArg, depth: number = 0) {
    if (field.__typename !== '__Field' || !field.args.length) return '';

    // add a line break when there is more than two field arguments
    const lineBreak = field.args.length > 2;

    const serialized = field.args
      .map((a) => {
        const argumentName = field.name + '_' + serializeType(a);
        const type = serializeType(a, 0, { isArg: true });
        if (!type) throw new Error(`Cannot serialize argument type ${a.name}`);
        variables[argumentName] = type;

        return [lineBreak ? `\n${padding(depth)}` : '', a.name, ': $', argumentName].join('');
      })
      .join(', ');

    return `(${serialized}${lineBreak ? `\n${padding(depth - 1)}` : ''})`;
  }

  function serializeType(
    field: SchemaField | SchemaPossibleType | SchemaFieldArg,
    depth: number = 0,
    options: {
      isUnion?: boolean;
      isArg?: boolean;
    } = {}
  ): string | null {
    const { isArg, isUnion } = options;

    const kind = field.__typename === '__Type' ? field.kind : field.type.kind;
    const name = field.__typename === '__Type' ? field.name : field.type.name;

    switch (kind) {
      case 'INPUT_OBJECT':
      case 'ENUM':
      case 'SCALAR': {
        const name = isArg && field.__typename === '__InputValue' ? field.type.name : field.name;
        return name + serializeArgs(field, depth);
      }

      case 'NON_NULL':
      case 'LIST': {
        if (field.__typename !== '__InputValue' || !field.type.ofType) return null;

        const parentType = { ...field, type: field.type.ofType };
        const serialized = serializeType(parentType, depth, options);

        if (!isArg) return serialized;
        if (kind === 'NON_NULL') return serialized + '!';
        if (kind === 'LIST') return `[${serialized}]`;
      }

      case 'OBJECT': {
        const expanded = expandType(name, depth + 1);
        if (!expanded) return null;
        return [
          isUnion ? '... on ' : '',
          field.name,
          serializeArgs(field, depth + 1),
          ' {\n',
          expanded,
          '\n',
          padding(depth),
          '}',
        ].join('');
      }

      case 'UNION': {
        const expanded = expandType(name, depth, true);
        if (expanded) return null;
        return [field.name, ' {\n', expanded, `\n${padding(depth)}}`].join('');
      }

      default: {
        throw new Error(`unhandled field:\n${JSON.stringify(field)}`);
      }
    }
  }

  function expandType(name: undefined | string | null, depth = 0, isUnion?: boolean): null | string {
    if (!name) return null;

    const [query, field] = name.split('.');

    let normalizedDepth = depth;
    if (isUnion) normalizedDepth -= 1; // unions dont actually add query depth

    if (normalizedDepth > depthLimit) return null;

    const node = types.find((q) => q.name === query);

    if (!node) throw new Error(`Cannot find type ${name}`);

    const children =
      node.kind === 'UNION'
        ? node.possibleTypes
        : field
        ? node.fields?.filter((f) => f.name === field)
        : node.fields;

    return (children || [])
      .map((field) => serializeType(field, depth, { isUnion }))
      .filter(Boolean)
      .map((f) => padding(depth) + f)
      .join('\n');
  }

  const fields = expandType(name);
  const vars = serializeVariables(variables);

  return {
    query: `query ${documentName} ` + (vars ? `(\n${vars}\n)` : '') + ' {\n' + fields + '\n}',
    variables,
  };
}
