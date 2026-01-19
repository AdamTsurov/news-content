import { NEWS_CATEGORIES } from '../../constants/categories';
import type { CategoriesType, IFilters } from '../../interfaces';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const categories: CategoriesType[] = [...NEWS_CATEGORIES.map((cat) => cat.id)];

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilter('category', category)}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords: string) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
