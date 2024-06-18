import styles from './styles.module.css';
export const Pagination = ({
  totalPages,
  handlePrevPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={styles.buttons}
      >
        {'<'}
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          onClick={() => {
            handlePageClick(index + 1);
          }}
          className={styles.buttons}
          key={index}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.buttons}
      >
        {'>'}
      </button>
    </div>
  );
};
