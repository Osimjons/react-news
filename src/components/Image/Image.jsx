import styles from './styles.module.css';
export const Image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image && (
        <img
          src={image !== 'None' ? image : '../favicon.svg'}
          alt="newsImage"
          className={styles.image}
        />
      )}
    </div>
  );
};
