import { useGetLatestNewsQuery } from '../../store/services/articlesApi';
import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.articles} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
