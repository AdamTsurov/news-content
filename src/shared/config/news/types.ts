export type CategoriesType =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';



export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export interface IFilters {
  page: number;
  pageSize: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<Omit<IFilters, 'keywords'>> & {
  country?: string;
  language?: string;
  q?: string;
};
