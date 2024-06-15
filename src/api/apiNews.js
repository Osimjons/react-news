import axios from 'axios';

const NEWS_BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${NEWS_BASE_URL}latest-news`, {
      params: {
        apiKey: NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};
