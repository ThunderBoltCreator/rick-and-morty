import { baseApi } from 'app/api/base-api.ts'
import { Character } from './types.ts'
import { BaseResponse } from 'shared/api/types.ts'

export const charactersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCharacters: build.query<BaseResponse<Character[]>, { name: string; page: number }>({
      query: args => ({
        url: 'character',
        params: { ...args },
      }),
    }),
    getCharacterById: build.query<Character, { id: string }>({
      query: args => ({
        url: `character/${args.id}`,
      }),
    }),
  }),
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApi
