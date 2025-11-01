import { GroupPage } from '../GroupPage';

export class BooksPage extends GroupPage {
  protected path = '/books';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
