import {createApi} from '@reduxjs/toolkit/query/react';
import type {inferProcedureOutput} from '@trpc/server';
import {trpc} from '../../utils/trpc';
import {AppRouter} from '../../../../backend/trpc';

type Verbs = inferProcedureOutput<AppRouter['verbs']['getVerbs']>;

export const verbsApi = createApi({
  reducerPath: 'verbsApi',
  baseQuery: (trpcResult: Promise<unknown>) => trpcResult.then(data => ({data})).catch(error => ({error})),
  // eslint-disable-next-line max-len
  endpoints: builder => ({getVerbs: builder.query<Verbs, void>({query: () => trpc.verbs.getVerbs.query()})}),
});

export const {useGetVerbsQuery} = verbsApi;
