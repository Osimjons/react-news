import styles from './styles.module.css';

export const CategoryButtons = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <>
      <div className={styles.btnWrap}>
        {categories.map((item) => (
          <button
            disabled={item === selectedCategory}
            onClick={() => {
              setSelectedCategory(item);
            }}
            className={
              item === selectedCategory ? styles.active : styles.category
            }
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
