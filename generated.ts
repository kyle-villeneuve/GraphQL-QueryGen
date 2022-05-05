import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename: '__Schema';
  description?: Maybe<Scalars['String']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  specifiedByUrl?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  SCALAR = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  OBJECT = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  INTERFACE = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  UNION = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  ENUM = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  INPUT_OBJECT = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  LIST = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NON_NULL = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename: '__Directive';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isRepeatable: Scalars['Boolean'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};


/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  QUERY = 'QUERY',
  /** Location adjacent to a mutation operation. */
  MUTATION = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  SUBSCRIPTION = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  FIELD = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FRAGMENT_SPREAD = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  INLINE_FRAGMENT = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VARIABLE_DEFINITION = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  SCHEMA = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  SCALAR = 'SCALAR',
  /** Location adjacent to an object type definition. */
  OBJECT = 'OBJECT',
  /** Location adjacent to a field definition. */
  FIELD_DEFINITION = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  INTERFACE = 'INTERFACE',
  /** Location adjacent to a union definition. */
  UNION = 'UNION',
  /** Location adjacent to an enum definition. */
  ENUM = 'ENUM',
  /** Location adjacent to an enum value definition. */
  ENUM_VALUE = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  INPUT_OBJECT = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION'
}





export type IntrospectionQueryVariables = Exact<{ [key: string]: never; }>;


export type IntrospectionQuery = (
  { __typename: 'Query' }
  & { __schema: (
    { __typename: '__Schema' }
    & { types: Array<(
      { __typename: '__Type' }
      & FullTypeFragment
    )> }
  ) }
);

export type FullTypeFragment = (
  { __typename: '__Type' }
  & Pick<__Type, 'kind' | 'name' | 'description'>
  & { fields?: Maybe<Array<(
    { __typename: '__Field' }
    & Pick<__Field, 'name' | 'description' | 'isDeprecated' | 'deprecationReason'>
    & { args: Array<(
      { __typename: '__InputValue' }
      & InputValueFragment
    )>, type: (
      { __typename: '__Type' }
      & TypeRefFragment
    ) }
  )>>, inputFields?: Maybe<Array<(
    { __typename: '__InputValue' }
    & InputValueFragment
  )>>, interfaces?: Maybe<Array<(
    { __typename: '__Type' }
    & TypeRefFragment
  )>>, enumValues?: Maybe<Array<(
    { __typename: '__EnumValue' }
    & Pick<__EnumValue, 'name' | 'description' | 'isDeprecated' | 'deprecationReason'>
  )>>, possibleTypes?: Maybe<Array<(
    { __typename: '__Type' }
    & TypeRefFragment
  )>> }
);

export type InputValueFragment = (
  { __typename: '__InputValue' }
  & Pick<__InputValue, 'name' | 'description' | 'defaultValue'>
  & { type: (
    { __typename: '__Type' }
    & TypeRefFragment
  ) }
);

export type TypeRefFragment = (
  { __typename: '__Type' }
  & Pick<__Type, 'kind' | 'name'>
  & { ofType?: Maybe<(
    { __typename: '__Type' }
    & Pick<__Type, 'kind' | 'name'>
    & { ofType?: Maybe<(
      { __typename: '__Type' }
      & Pick<__Type, 'kind' | 'name'>
      & { ofType?: Maybe<(
        { __typename: '__Type' }
        & Pick<__Type, 'kind' | 'name'>
        & { ofType?: Maybe<(
          { __typename: '__Type' }
          & Pick<__Type, 'kind' | 'name'>
          & { ofType?: Maybe<(
            { __typename: '__Type' }
            & Pick<__Type, 'kind' | 'name'>
            & { ofType?: Maybe<(
              { __typename: '__Type' }
              & Pick<__Type, 'kind' | 'name'>
              & { ofType?: Maybe<(
                { __typename: '__Type' }
                & Pick<__Type, 'kind' | 'name'>
              )> }
            )> }
          )> }
        )> }
      )> }
    )> }
  )> }
);

export const TypeRefFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TypeRef"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"__Type"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ofType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ofType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ofType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ofType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ofType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ofType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ofType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TypeRefFragment, unknown>;
export const InputValueFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InputValue"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"__InputValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TypeRef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}}]}}]} as unknown as DocumentNode<InputValueFragment, unknown>;
export const FullTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"__Type"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"includeDeprecated"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InputValue"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TypeRef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isDeprecated"}},{"kind":"Field","name":{"kind":"Name","value":"deprecationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inputFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InputValue"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interfaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TypeRef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enumValues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"includeDeprecated"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isDeprecated"}},{"kind":"Field","name":{"kind":"Name","value":"deprecationReason"}}]}},{"kind":"Field","name":{"kind":"Name","value":"possibleTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TypeRef"}}]}}]}}]} as unknown as DocumentNode<FullTypeFragment, unknown>;
export const IntrospectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Introspection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__schema"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullType"}}]}}]}}]}},...FullTypeFragmentDoc.definitions,...InputValueFragmentDoc.definitions,...TypeRefFragmentDoc.definitions]} as unknown as DocumentNode<IntrospectionQuery, IntrospectionQueryVariables>;