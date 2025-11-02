import { Categories } from './categories';
import { AlertsPage } from '../pages/alerts';
import { BooksPage } from '../pages/books';
import { ElementsPage } from '../pages/elements';
import { FormsPage } from '../pages/forms';
import { InteractionPage } from '../pages/interaction';
import { WidgetsPage } from '../pages/widgets';

export const categoryToPageMap = {
  [Categories.ELEMENTS]: ElementsPage,
  [Categories.FORMS]: FormsPage,
  [Categories.ALERTS]: AlertsPage,
  [Categories.WIDGETS]: WidgetsPage,
  [Categories.INTERACTIONS]: InteractionPage,
  [Categories.BOOKS_API]: BooksPage,
} as const;
