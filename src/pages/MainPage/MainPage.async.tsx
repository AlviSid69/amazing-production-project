import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // В реальных проектах так не делаем!
  setTimeout(() => resolve(import('./MainPage')), 1500)
}));