import { Categories } from '../data/categories';
import { ElementsPage } from './elements';

export const categoryToPageMap = {
  [Categories.ELEMENTS]: ElementsPage,
} as const;
