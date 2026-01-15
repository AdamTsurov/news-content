import { NEWS_CATEGORIES } from '../../constants/categories';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

const NewsFilters = ({ filters, changeFilter }) => {
  const categories = [...NEWS_CATEGORIES.map((cat) => cat.id)];

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
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};

export default NewsFilters;
