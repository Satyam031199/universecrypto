import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'df06b26029msh6a1502c114d4f1bp1b5433jsna5357aee9ef1',
    'X-RapidAPI-Host': 'duckduckgo10.p.rapidapi.com'
  };

const baseUrl = 'https://duckduckgo10.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: () => createRequest('/search?term=cryptocurrency&safeSearch=off&region=in-en')
        })
    })
})

export const {
    useGetCryptosNewsQuery,
} = cryptoNewsApi