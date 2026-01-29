import { useGetLatestNewsQuery } from '@/entities/news/api/articlesApi';
import styles from './styles.module.css';
import { NewsList } from '@/widgets/news';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList type="banner" direction="row" news={data && data.articles} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
