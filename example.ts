import genQuery from '.';
import { fetchGQL } from './fetch';
import { IntrospectionDocument } from './generated';

export const getQuery = () =>
  fetchGQL({
    endpoint: 'https://api.spacex.land/graphql/',
    query: IntrospectionDocument,
    variables: {},
  })
    .then((res) => genQuery(res.data.__schema.types, 'SpaceX', 'Query', 1))
    .then(console.log)
    .catch(console.log);
