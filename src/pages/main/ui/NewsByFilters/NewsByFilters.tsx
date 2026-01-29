import { useAppSelector } from '@/app/appStore';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useGetNewsQuery } from '@/entities/news/api/articlesApi';
import styles from './styles.module.css';
import { NEWS_CATEGORIES, type CategoriesType } from '@/shared/config/news';
import { NewsFilters } from '@/widgets/news';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination';

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.articles.filters);
  const articles = useAppSelector((state) => state.articles.articles);

  const categories: CategoriesType[] = [
    ...NEWS_CATEGORIES.map((cat: { id: CategoriesType }) => cat.id),
  ];

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={categories || []} />

      <NewsListWithPagination isLoading={isLoading} articles={articles} filters={filters} />
    </section>
  );
};

export default NewsByFilters;
