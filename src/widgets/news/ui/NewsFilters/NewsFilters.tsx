import { useAppDispatch } from '@/app/appStore';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Slider from '@/features/slider/ui/Slider/Slider';
import { setFilters } from '@/entities/news/model/articlesSlice';
import styles from './styles.module.css';
import { useTheme } from '@/app/providers/ThemeProvider';
import { type CategoriesType, type IFilters } from '@/shared/config/news';

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

const NewsFilters = ({ filters, categories }: Props) => {
  const { isDark } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => {
              dispatch(setFilters({ key: 'category', value: category }));
            }}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords || ''}
        setKeywords={(keywords: string) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
