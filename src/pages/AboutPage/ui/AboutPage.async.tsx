import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // В реальных проектах так не делаем!
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}));