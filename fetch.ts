import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLError, print } from 'graphql';
import fetch, { Headers } from 'node-fetch';

type FetchResponse<T> = {
  errors?: GraphQLError[];
  data: T;
  headers: Headers;
};

export async function fetchGQL<TData = any, TVars = Record<string, any>>({
  endpoint,
  query,
  variables,
}: {
  endpoint: string;
  query: TypedDocumentNode<TData, TVars>;
  variables: TVars;
}): Promise<FetchResponse<TData>> {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const response = await fetch(endpoint, {
    headers,
    method: 'POST',
    body: JSON.stringify({ query: typeof query === 'string' ? query : print(query), variables }),
  });

  const json: FetchResponse<TData> = await response.json();

  if (json.errors?.length) {
    json.errors.forEach((e) => console.log(e));
    throw json.errors;
  }

  if (!response.ok) {
    throw response.statusText;
  }

  return {
    ...json,
    headers: response.headers,
  };
}
