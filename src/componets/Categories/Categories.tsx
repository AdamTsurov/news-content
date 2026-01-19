import React, { type ForwardedRef } from 'react';
import styles from './styles.module.css';
import type { CategoriesType } from '../../interfaces';

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = React.forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}>
          all
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? styles.active : styles.item}
              key={category}>
              {category}
            </button>
          );
        })}
      </div>
    );
  },
);

export default Categories;
