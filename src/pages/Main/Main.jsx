import { useState } from 'react';
import { getNews } from '../../api/apiNews';
import { getСategories } from '../../api/apiNews';
import { NewsListWithSkeleton } from '../../components/NewsList/NewsList';
import { SelectLanguage } from '../../components/SelectLanguage/SelectLanguage';
import { Pagination } from '../../components/Pagination/Pagination';
import { CategoryButtons } from '../../components/CategoryButtons/CategoryButtons';
import { Search } from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { NewsBannerWithSkeleton } from '../../components/NewsBanner/NewsBanner';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { usePaginationNews } from '../../helpers/hooks/usePaginationNews';

export const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [language, setLanguage] = useState('ru');
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');

  // const

  const debouncedKeyword = useDebounce(keyword, 1500);

  const { data, isloading } = useFetch(getNews, {
    language,
    keyword: debouncedKeyword,
    page_size: PAGE_SIZE,
    page_number: currentPage,
    category: selectedCategory === 'All' ? null : selectedCategory,
  });

  const { data: dataCategories } = useFetch(getСategories);

  const { handleNextPage, handlePrevPage, handlePageClick } = usePaginationNews(
    currentPage,
    setCurrentPage
  );

  return (
    <>
      <SelectLanguage currentLanguage={language} setLanguage={setLanguage} />

      {dataCategories ? (
        <CategoryButtons
          categories={dataCategories.categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ) : null}

      <Search keyword={keyword} setKeyword={setKeyword} />

      {data && (
        <NewsBannerWithSkeleton
          isloading={isloading}
          item={data && data.news && data.news[0]}
        />
      )}

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />

      <NewsListWithSkeleton isloading={isloading} news={data && data.news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </>
  );
};
