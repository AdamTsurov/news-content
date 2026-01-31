import { formatTimeAgo } from '@/shared/lib/helpers/formatTimeAgo';
import type { INews } from '../../model/types';
import styles from './styles.module.css';
import Image from '@/shared/ui/Image/Image';

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.urlToImage} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){' '}
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.author}
        </p>

        <button className={styles.active}>{item.category}</button>
      </div>
    </div>
  );
};

export default NewsDetails;
