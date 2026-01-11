import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({ page = 1, pagesize = 10, category, keywords }) => {
  const endpoint = category ? 'top-headlines' : 'everything';

  const params = { page, pagesize, apiKey: API_KEY, q: keywords };

  if (category) {
    params.category = category;
  }

  if (keywords) {
    params.q = keywords;
  } else if (!category) {
    params.q = 'news';
  }

  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
