import { BasePage } from '../BasePage';

export class ElementsPage extends BasePage {
  protected path = '/elements';

  protected get selectors() {
    return {
      ...super.selectors,
      navMenu: '.category-cards',
    };
  }
}
