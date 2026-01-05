import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page = 1, pagesize = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}everything`, {
      params: {
        q: 'it',
        apiKey: API_KEY,
        page,
        pagesize,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
