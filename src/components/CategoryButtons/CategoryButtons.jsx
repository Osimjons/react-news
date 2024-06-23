import { useFormatCategories } from '../../helpers/hooks/useFormatCategories';
import styles from './styles.module.css';

export const CategoryButtons = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  const formattedCategories = useFormatCategories(categories);

  const copyOfCategory = ['All', ...formattedCategories];

  return (
    <>
      <div className={styles.btnWrap}>
        {copyOfCategory?.map((category) => (
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
