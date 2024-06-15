import { Image } from '../Image/Image';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';
export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.bunner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p>{item.description}</p>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} автор {item.author}
      </p>
    </div>
  );
};
