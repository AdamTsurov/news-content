import { useAppDispatch, useAppSelector } from '@/app/appStore';
import NewsList from '@/widgets/news/ui/NewsList/NewsList';
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination';
import { TOTAL_PAGES } from '@/shared/config/pagination';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useGetNewsQuery } from '@/entities/news/api/articlesApi';
import { setFilters } from '@/entities/news/model/articlesSlice';
import NewsFilters from '../NewsFilters/NewsFilters';
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
