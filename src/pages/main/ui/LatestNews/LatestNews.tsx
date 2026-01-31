import { useGetLatestNewsQuery } from '@/entities/news/api/articlesApi';
import styles from './styles.module.css';
import { NewsList } from '@/widgets/news';
import type { INews } from '@/entities/news';
import { useAppDispatch } from '@/app/appStore';
import { setCurrentArticles } from '@/entities/news/model/articlesSlice';
import { useNavigate } from 'react-router-dom';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const navigateTo = (news: INews) => {
    dispatch(setCurrentArticles(news));
    navigate(`/news/${news.source.id}`)
  };

  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.articles}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>view more...</p>}
      />
    </section>
  );
};

export default LatestNews;
