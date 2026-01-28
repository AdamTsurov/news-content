import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PAGE_SIZE } from '../../../shared/config/pagination';
import type { INews } from './types';
import type { IFilters } from '@/shared/config/news';

interface State {
  articles: INews[];
  filters: IFilters;
}

const initialState: State = {
  articles: [],
  filters: { page: 1, pageSize: PAGE_SIZE, category: null, keywords: '' },
};

export const articlesSlice = createSlice({
  name: 'arcticles',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<INews[]>) => {
      state.articles = action.payload;
    },
    setFilters: (state, action: PayloadAction<{ key: string; value: string | null | number }>) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setArticles, setFilters } = articlesSlice.actions;

export default articlesSlice.reducer;
