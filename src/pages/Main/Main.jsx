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
  const [filters, setFilters] = useState({
    language: 'ru',
    keyword: '',
    page_size: PAGE_SIZE,
    page_number: 1,
    category: 'All',
  });
  const chengeFilters = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const debouncedKeyword = useDebounce(filters.keyword, 1500);

  const { data, isloading } = useFetch(getNews, {
    ...filters,
    keyword: debouncedKeyword,
  });

  const { data: dataCategories } = useFetch(getСategories);

  const { handleNextPage, handlePrevPage, handlePageClick } = usePaginationNews(
    filters.page_number,
    (page_number) => chengeFilters('page_number', page_number)
  );
  return (
    <>
      <SelectLanguage
        currentLanguage={filters.language}
        setLanguage={(language) => chengeFilters('language', language)}
      />
      {dataCategories ? (
        <CategoryButtons
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            chengeFilters('category', category)
          }
        />
      ) : null}

      <Search
        keyword={filters.keyword}
        setKeyword={(keyword) => chengeFilters('keyword', keyword)}
      />

      <NewsBannerWithSkeleton
        isloading={isloading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />

      <NewsListWithSkeleton isloading={isloading} news={data && data.news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
    </>
  );
};
