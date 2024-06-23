import withSkeleton from '../../helpers/hocs/withSkeleton';
import { NewsItem } from '../NewsItem/NewsItem';
import styles from './styles.module.css';
const NewsList = ({ news }) => {
  news.splice(0, 1);
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export const NewsListWithSkeleton = withSkeleton(NewsList, 'banner', 10);
