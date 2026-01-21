import { TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetNewsQuery } from '../../store/services/articlesApi';
import { setFilters } from '../../store/slices/articlesSlice';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import styles from './styles.module.css';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.articles.filters);
  const articles = useAppSelector((state) => state.articles.articles);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page < TOTAL_PAGES) {
      dispatch(setFilters({ key: 'page', value: filters.page + 1 }));
    }
  };

  const handlePreviousPage = () => {
    if (filters.page > 1) {
      dispatch(setFilters({ key: 'page', value: filters.page - 1 }));
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page', value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page}>
        <NewsList isLoading={isLoading} news={articles} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
