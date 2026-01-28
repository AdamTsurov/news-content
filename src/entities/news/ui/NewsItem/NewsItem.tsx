import { formatTimeAgo } from '@/shared/lib/helpers/formatTimeAgo';
import type { INews } from '../../model/types';
import styles from './styles.module.css';

interface Props {
  item: INews;
}

const NewsItem = ({ item }: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${item.urlToImage})` }}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
