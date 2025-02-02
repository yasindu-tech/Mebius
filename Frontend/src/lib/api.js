import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getCategories: builder.query({
      query: () => `categories`
    })
  }),
})


export const { useGetProductsQuery,useGetCategoriesQuery} = Api

