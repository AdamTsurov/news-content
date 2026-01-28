import type { CategoriesType } from './types';

export const NEWS_CATEGORIES: { id: CategoriesType }[] = [
  { id: 'business' },
  { id: 'entertainment' },
  { id: 'general' },
  { id: 'health' },
  { id: 'science' },
  { id: 'sports' },
  { id: 'technology' },
];

export const CATEGORIES_LIST: CategoriesType[] = NEWS_CATEGORIES.map(
  (cat) => cat.id,
);