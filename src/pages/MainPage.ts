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

  async clickCategoryByName(categoryName: string) {
    const cards = await this.page.$$('.category-cards .card');

    for (const card of cards) {
      const titleHandle = await card.$('.card-body h5');
      if (!titleHandle) continue;

      const title = await this.page.evaluate(
        (el) => el.textContent?.trim(),
        titleHandle
      );

      if (title?.toLowerCase() === categoryName.toLowerCase()) {
        await card.click();
        return;
      }
    }

    throw new Error(`❌ Category "${categoryName}" not found`);
  }
}
