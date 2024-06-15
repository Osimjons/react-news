import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';

export const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const resp = await getNews();
        setNews(resp.news);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      {news.length > 0 ? <NewsBanner item={news[1]} /> : <p>Loading...</p>}
      <NewsList news={news} />
    </>
  );
};
