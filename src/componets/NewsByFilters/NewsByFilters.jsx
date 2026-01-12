import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import styles from './styles.module.css';

const NewsByFilter = ({ filters, changeFilter, isLoading, articles }) => {
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
    <section className={styles.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />

      <NewsList isLoading={isLoading} news={articles} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}
      />
    </section>
  );
};

export default NewsByFilter;
