import NewsList from '@/widgets/news/ui/NewsList/NewsList';
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination';
import { TOTAL_PAGES } from '@/shared/config/pagination';
import type { IFilters } from '@/shared/config/news';
import type { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
  filters: IFilters;
  articles: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, articles, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } = usePaginationNews(filters);

  return (
    <PaginationWrapper
      top
      bottom
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page}>
      <NewsList type="item" direction="row" isLoading={isLoading} news={articles} />
    </PaginationWrapper>
  );
};

export default NewsListWithPagination;
