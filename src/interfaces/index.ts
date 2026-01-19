export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  urlToImage: string;
  language: string;
  publishedAt: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: INews[];
}

export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export interface IPaginationProps {
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}

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

export type CategoriesType =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
