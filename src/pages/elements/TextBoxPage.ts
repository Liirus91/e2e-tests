import { ElementsPage } from '.';

export class TextBoxPage extends ElementsPage {
  protected path = '/text-box';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
