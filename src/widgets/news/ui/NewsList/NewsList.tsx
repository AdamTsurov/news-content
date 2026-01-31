import { type INews } from '@/entities/news';
import styles from './styles.module.css';
import withSkeleton from '@/shared/lib/hocs/withSkeleton';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import type { ReactNode } from 'react';

interface Props {
  news?: INews[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
  viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = ({ news, type = 'item', viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard key={item.url} viewNewsSlot={viewNewsSlot} item={item} type={type} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
