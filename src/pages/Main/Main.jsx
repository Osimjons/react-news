import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';
import { SelectLanguage } from '../../components/SelectLanguage/SelectLanguage';
import { Pagination } from '../../components/Pagination/Pagination';
import { Skeleton } from '../../components/Skeleton/Skeleton';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [language, setLanguage] = useState('ru');
  const [currentPage, setCurrentPage] = useState(1);
  const [isloading, setIsloading] = useState(true);
  const pageSize = 10;
  const totlaPages = 10;

  const fetchNews = async (currentPage, language) => {
    try {
      setIsloading(true);
      const resp = await getNews(language, pageSize, currentPage);
      setNews(resp.news);
      setIsloading(false);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totlaPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    fetchNews(currentPage, language);
  }, [language, currentPage]);
  // getWaether();

  return (
    <>
      <SelectLanguage currentLanguage={language} setLanguage={setLanguage} />

      <Pagination
        totalPages={totlaPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />

      {news.length > 0 && !isloading ? (
        <NewsBanner item={news[1]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}

      {!isloading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={'item'} count={10} />
      )}

      <Pagination
        totalPages={totlaPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
};
