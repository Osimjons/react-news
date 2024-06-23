import styles from './styles.module.css';
export const Skeleton = ({ count = 1, type = 'banner' }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => {
            return (
              <li
                key={index}
                className={type === 'banner' ? styles.banner : styles.item}
              ></li>
            );
          })}
        </ul>
      ) : (
        <ul className={styles.list}>
          <li className={type === 'banner' ? styles.banner : styles.item}></li>
        </ul>
      )}
    </>
  );
};
