import { useEffect, useState } from 'react';
import NewsBanner from '../../componets/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../componets/NewsList/NewsList';
import Skeleton from '../../componets/Skeleton/Skeleton';
import Pagination from '../../componets/Pagination/Pagination';
import { NEWS_CATEGORIES } from '../../constants/categories';
import Categories from '../../componets/Categories/Categories';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const totalPages = 10;
  const pageSize = 10;

  const categories = ['all', ...NEWS_CATEGORIES.map((cat) => cat.id)];

  useEffect(() => {
    const fetchNews = async (currentPage) => {
      try {
        setIsLoading(true);
        const response = await getNews({
          page: currentPage,
          pagesize: pageSize,
          category: selectedCategory === 'all' ? null : selectedCategory,
        });
        setNews(response.articles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews(currentPage);
  }, [currentPage, pageSize, selectedCategory]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={'banner'} />
      )}
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
