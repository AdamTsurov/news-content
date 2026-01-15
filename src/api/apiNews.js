import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getFilteredNews = async ({ page = 1, pageSize = 10, category, keywords }) => {
  const hasKeywords = Boolean(keywords?.trim());
  const hasCategory = Boolean(category);

  const params = {
    apiKey: API_KEY,
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
    const response = await axios.get(`${BASE_URL}top-headlines`, {
      params,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getLatestNews = async () => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  try {
    const response = await axios.get(`${BASE_URL}everything`, {
      params: {
        apiKey: API_KEY,
        sources: 'bbc-news',
        from: oneMonthAgo.toISOString().split('T')[0],
        pageSize: 50,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
