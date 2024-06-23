import { TOTAL_PAGES } from '../../constants/constants';

export const usePaginationNews = (currentPage, setCurrentPage) => {
  const handleNextPage = () => {
    if (currentPage < TOTAL_PAGES) {
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

  return { handleNextPage, handlePrevPage, handlePageClick };
};
