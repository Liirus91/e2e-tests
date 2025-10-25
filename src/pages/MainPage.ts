import { Page } from 'puppeteer';
import { CategoryName } from '../data/categories';
import { isElementVisible } from '../utils/pageHelpers';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  protected path = '/';

  protected get selectors() {
    return {
      ...super.selectors,
      navMenu: '.category-cards',
      categoryCards: '.category-cards .card',
      cardTitle: '.card-body h5',
    };
  }

  async isCategoriesMenuVisible() {
    return isElementVisible(this.page, this.selectors.navMenu);
  }

  async waitForNavMenu() {
    await this.page.waitForSelector(this.selectors.navMenu, { visible: true });
  }

  async clickCategoryByName<T extends BasePage>(
    categoryName: CategoryName,
    PageClass: new (page: Page) => T
  ): Promise<T> {
    const { categoryCards, cardTitle } = this.selectors;
    const cards = await this.page.$$(categoryCards);

    for (const card of cards) {
      const titleHandle = await card.$(cardTitle);

      if (!titleHandle) continue;

      const title = await this.page.evaluate(
        (el) => el.textContent?.trim(),
        titleHandle
      );

      if (title?.toLowerCase() === categoryName.toLowerCase()) {
        await card.click();
        return new PageClass(this.page);
      }
    }

    throw new Error(`❌ Category "${categoryName}" not found`);
  }
}
