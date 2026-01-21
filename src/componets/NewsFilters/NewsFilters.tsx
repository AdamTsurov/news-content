import { NEWS_CATEGORIES } from '../../constants/categories';
import type { CategoriesType, IFilters } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { setFilters } from '../../store/slices/articlesSlice';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const categories: CategoriesType[] = [...NEWS_CATEGORIES.map((cat) => cat.id)];
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
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
        keywords={filters.keywords}
        setKeywords={(keywords: string) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
