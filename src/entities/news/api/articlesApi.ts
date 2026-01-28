import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setArticles } from '../model/articlesSlice';
import type { NewsApiResponse } from '../model/types';
import type { IFilters, ParamsType } from '@/shared/config/news';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, IFilters>({
      keepUnusedDataFor: 0,
      query: (filters) => {
        const { page = 1, pageSize = 10, keywords = '', category = null } = filters || {};

        const hasKeywords = Boolean(keywords.trim());
        const hasCategory = Boolean(category);

        const params: ParamsType = {
          page,
          pageSize,
        };

        if (hasKeywords) {
          params.q = keywords.trim();
        }

        if (hasCategory) {
          params.category = category;
        }

        if (hasKeywords && hasCategory) {
          params.country = 'us';
        }

        if (hasKeywords && !hasCategory) {
          params.language = 'en';
        }

        if (!hasKeywords && !hasCategory) {
          params.language = 'en';
        }
        return {
          url: 'top-headlines',
          params: {
            ...params,
            apiKey: API_KEY,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(setArticles(data.articles));
      },
    }),
    getLatestNews: builder.query<NewsApiResponse, null>({
      query: () => {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

        return {
          url: 'everything',
          params: {
            apiKey: API_KEY,
            sources: 'bbc-news',
            from: oneMonthAgo.toISOString().split('T')[0],
            pageSize: 50,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = articlesApi;
