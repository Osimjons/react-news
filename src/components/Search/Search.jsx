import styles from './styles.module.css';
export const Search = ({ keyword, setKeyword }) => {
  return (
    <>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          value={keyword}
          placeholder="Введи ваш запрос..."
          onChange={(e) => {
            setKeyword(e.currentTarget.value.trim());
          }}
        />
      </div>
    </>
  );
};
