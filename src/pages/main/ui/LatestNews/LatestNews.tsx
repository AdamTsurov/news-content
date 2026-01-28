import { useGetLatestNewsQuery } from '@/entities/news/api/articlesApi';
import styles from './styles.module.css';
import BannersList from '@/widgets/news/ui/BannersList/BannersList';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.articles} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
