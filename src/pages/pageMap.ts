import { Categories } from '../data/categories';
import { AlertsPage } from './alerts';
import { BooksPage } from './books';
import { ElementsPage } from './elements';
import { FormsPage } from './forms';
import { InteractionPage } from './interaction';
import { WidgetsPage } from './widgets';

export const categoryToPageMap = {
  [Categories.ELEMENTS]: ElementsPage,
  [Categories.FORMS]: FormsPage,
  [Categories.ALERTS]: AlertsPage,
  [Categories.WIDGETS]: WidgetsPage,
  [Categories.INTERACTIONS]: InteractionPage,
  [Categories.BOOKS_API]: BooksPage,
} as const;
