import styles from './styles.module.css';
import type { INews } from '../../model/types';
import { formatTimeAgo } from '@/shared/lib/helpers/formatTimeAgo';
import NewsImage from '@/shared/ui/NewsImage/NewsImage';

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  if (!item) {
    return <div>Нет новостей</div>;
  }

  return (
    <div className={styles.banner}>
      <NewsImage image={item?.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
