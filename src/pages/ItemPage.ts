import { BasePage } from './BasePage';

export abstract class ItemPage extends BasePage {
  getInputValue(selector: string) {
    throw new Error('Method not implemented.');
  }
  protected get selectors() {
    return {
      ...super.selectors,
      pageTitle: '.text-center',
    };
  }

  async getPageTitle(): Promise<string> {
    const titleHandle = await this.page.$(this.selectors.pageTitle);
    if (!titleHandle) throw new Error('❌ Page title not found');

    const title = await this.page.evaluate(
      (el) => el.textContent?.trim() || '',
      titleHandle
    );

    return title;
  }
}
