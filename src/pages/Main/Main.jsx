import styles from './styles.module.css';
import LatestNews from '../../componets/LatestNews/LatestNews';
import NewsByFilters from '../../componets/NewsByFilters/NewsByFilters';

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
