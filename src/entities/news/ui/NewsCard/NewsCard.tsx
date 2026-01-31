import { formatTimeAgo } from '@/shared/lib/helpers/formatTimeAgo';
import type { INews } from '../../model/types';
import styles from './styles.module.css';
import Image from '@/shared/ui/Image/Image';
import type { ReactNode } from 'react';

interface Props {
  item: INews;
  type: 'banner' | 'item';
  viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsCard = ({ item, type = 'item', viewNewsSlot }: Props) => {
  return (
    <li className={`${styles.card} ${type === 'banner' && styles.banner}`}>
      {type === 'banner' ? (
        <Image image={item?.urlToImage} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.urlToImage})` }}></div>
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.author}
        </p>
      </div>

      {viewNewsSlot ? viewNewsSlot(item) : null}
    </li>
  );
};

export default NewsCard;
