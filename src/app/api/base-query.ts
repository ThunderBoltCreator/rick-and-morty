import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { CustomError } from 'shared/api/types.ts'

export const baseQuery: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError | CustomError
> = fetchBaseQuery({
  baseUrl: 'https://rickandmortyapi.com/api',
})
