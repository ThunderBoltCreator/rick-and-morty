import { baseQuery } from 'app/api/base-query.ts'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['CHARACTERS'],
})
