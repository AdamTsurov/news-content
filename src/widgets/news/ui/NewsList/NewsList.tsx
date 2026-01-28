
import { NewsItem, type INews } from '@/entities/news';
import styles from './styles.module.css';
import withSkeleton from '@/shared/lib/hocs/withSkeleton';

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => (
        <NewsItem key={item.url} item={item} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;
