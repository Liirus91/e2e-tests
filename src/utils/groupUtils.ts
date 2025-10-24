import { Page } from 'puppeteer';
import { CategoryName } from '../data/categories';

export class GroupUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getGroupByName(name: CategoryName) {
    const groups = await this.page.$$('.element-group');
    for (const group of groups) {
      const header = await group.$('.header-text');
      if (!header) continue;
      const text = await this.page.evaluate(
        (el) => (el ? el.textContent?.trim() || '' : ''),
        header
      );
      if (text === name) return group;
    }
    throw new Error(`❌ Group "${name}" not found`);
  }

  async isGroupExpanded(name: CategoryName): Promise<boolean> {
    const group = await this.getGroupByName(name);
    const isExpanded = await group.$eval('.group-content', (el) =>
      el.classList.contains('show')
    );
    return isExpanded;
  }

  async toggleGroup(name: CategoryName): Promise<void> {
    const group = await this.getGroupByName(name);
    const header = await group.$('.group-header');
    if (!header) throw new Error(`❌ Header not found in group "${name}"`);
    await header.click();
  }

  async getAllGroupNames(): Promise<string[]> {
    const headers = await this.page.$$('.group .group-header');
    const names = await Promise.all(
      headers.map((el) =>
        this.page.evaluate((e) => e.textContent?.trim() || '', el)
      )
    );
    return names;
  }
}
