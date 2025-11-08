import { ItemPage } from '../ItemPage';

export class ElementsPage extends ItemPage {
  protected path = '/elements';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
