import type { CategoriesType } from "@/shared/config/news";


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
