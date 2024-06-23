import { Image } from '../Image/Image';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';
import withSkeleton from '../../helpers/hocs/withSkeleton';

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.bunner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p>
        {item.description}{' '}
        <a href={item.url} target="_blank">
          Читать подбробно...
        </a>
      </p>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} автор {item.author}
      </p>
    </div>
  );
};

export const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);
