import { ItemPage } from '../ItemPage';

export class TextBoxPage extends ItemPage {
  protected path = '/text-box';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
