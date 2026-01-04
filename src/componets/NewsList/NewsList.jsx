import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.url} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
