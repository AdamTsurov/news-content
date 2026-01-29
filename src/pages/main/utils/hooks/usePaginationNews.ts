import { useAppDispatch } from '@/app/appStore';
import { setFilters } from '@/entities/news/model/articlesSlice';
import type { IFilters } from '@/shared/config/news';
import { TOTAL_PAGES } from '@/shared/config/pagination';

export const usePaginationNews = (filters: IFilters) => {
  const dispatch = useAppDispatch();

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

  return { handleNextPage, handlePreviousPage, handlePageClick };
};
