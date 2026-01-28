import { articlesApi } from '@/entities/news/api/articlesApi';
import articlesreducer from '@/entities/news/model/articlesSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  articles: articlesreducer,
  [articlesApi.reducerPath]: articlesApi.reducer,
});
