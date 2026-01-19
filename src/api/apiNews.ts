import axios from 'axios';
import type { IFilters, NewsApiResponse, ParamsType } from '../interfaces';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getFilteredNews = async (filters?: IFilters): Promise<NewsApiResponse> => {
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

  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}top-headlines`, {
      params: { apiKey: API_KEY, ...params },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      totalResults: 0,
      articles: [],
    };
  }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}everything`, {
      params: {
        apiKey: API_KEY,
        sources: 'bbc-news',
        from: oneMonthAgo.toISOString().split('T')[0],
        pageSize: 50,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      totalResults: 0,
      articles: [],
    };
  }
};
