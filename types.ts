import { IntrospectionQuery } from './generated';

export type ElementOf<ArrayType extends readonly unknown[]> = ArrayType[number];

export type SchemaTypes = IntrospectionQuery['__schema']['types'];

export type SchemaType = ElementOf<SchemaTypes>;

export type SchemaField = ElementOf<NonNullable<SchemaType['fields']>>;

export type SchemaFieldArg = ElementOf<SchemaField['args']>;

export type SchemaPossibleType = ElementOf<NonNullable<SchemaType['possibleTypes']>>;
