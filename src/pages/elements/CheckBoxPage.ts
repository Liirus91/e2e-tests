import { ItemPage } from '../ItemPage';

export class CheckBoxPage extends ItemPage {
  protected path = '/checkbox';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
