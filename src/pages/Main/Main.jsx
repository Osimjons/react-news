import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import { getСategories } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';
import { SelectLanguage } from '../../components/SelectLanguage/SelectLanguage';
import { Pagination } from '../../components/Pagination/Pagination';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import { CategoryButtons } from '../../components/CategoryButtons/CategoryButtons';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [language, setLanguage] = useState('ru');
  const [currentPage, setCurrentPage] = useState(1);
  console.log('currentPage: ', currentPage);
  const [isloading, setIsloading] = useState(true);
  const pageSize = 10;
  const totlaPages = 10;

  // Запрос на серевер для начальной отрисовки
  const fetchNews = async (page_number, language, page_size) => {
    try {
      setIsloading(true);
      const resp = await getNews({
        language,
        page_size,
        page_number,
        category: selectedCategory === 'All' ? null : selectedCategory,
      });
      setNews(resp.news);
      setIsloading(false);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const fetchСategories = async () => {
    try {
      const resp = await getСategories();
      setCategories(['All', ...resp.categories.toSorted()]);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    fetchСategories();
  }, []);

  // Запуск функции запрос на серевер для начальной отрисовки
  useEffect(() => {
    fetchNews(currentPage, language, pageSize);
  }, [language, currentPage, selectedCategory]);

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

  return (
    <>
      <SelectLanguage currentLanguage={language} setLanguage={setLanguage} />
      <CategoryButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Pagination
        totalPages={totlaPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />

      {news.length > 0 && !isloading ? (
        <NewsBanner item={news[0]} />
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
