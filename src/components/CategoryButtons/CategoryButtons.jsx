import styles from './styles.module.css';

export const CategoryButtons = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  const copyOfTheCategory = ['All', ...categories];
  return (
    <>
      <div className={styles.btnWrap}>
        {copyOfTheCategory?.map((category) => (
          <button
            key={category}
            disabled={category === selectedCategory}
            onClick={() => setSelectedCategory(category)}
            className={
              category === selectedCategory ? styles.active : styles.category
            }
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};
