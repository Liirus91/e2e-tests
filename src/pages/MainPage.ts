import { isElementVisible } from '../utils/pageHelpers';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  protected path = '/';

  protected get selectors() {
    return {
      ...super.selectors,
      navMenu: '.category-cards',
    };
  }

  async isCategoriesMenuVisible() {
    return isElementVisible(this.page, this.selectors.navMenu);
  }

  async waitForNavMenu() {
    await this.page.waitForSelector(this.selectors.navMenu, { visible: true });
  }
}
