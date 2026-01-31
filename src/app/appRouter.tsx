import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { MainPage } from '@/pages/main';
import { NewsPage } from '@/pages/news';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    Component: BaseLayout,
    errorElement: <div>Error</div>,
    children: [
      { index: true, Component: MainPage },
      { path: 'news/:id', Component: NewsPage},
    ],
  },
]);
