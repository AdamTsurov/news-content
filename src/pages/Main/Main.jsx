import NewsBanner from '../../componets/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../componets/NewsList/NewsList';
import Pagination from '../../componets/Pagination/Pagination';
import { NEWS_CATEGORIES } from '../../constants/categories';
import Categories from '../../componets/Categories/Categories';
import Search from '../../componets/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page: 1,
    pagesize: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const categories = [...NEWS_CATEGORIES.map((cat) => cat.id)];

  const handleNextPage = () => {
    if (filters.page < TOTAL_PAGES) {
      changeFilter('page', filters.page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page > 1) {
      changeFilter('page', filters.page - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter('page', pageNumber);
  };

  return (
    <main className={styles.main}>
      {categories ? (
        <Categories
          categories={categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter('category', category)}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />

      <NewsBanner isLoading={isLoading} item={data && data.articles && data.articles[0]} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />

      <NewsList isLoading={isLoading} news={data.articles} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />
    </main>
  );
};

export default Main;
