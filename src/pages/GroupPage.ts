import { CategoryName } from '../data/categories';
import { BasePage } from './BasePage';

export abstract class GroupPage extends BasePage {
  protected groupSelector = '.element-group';
  protected groupTitleSelector = '.header-text';
  protected groupContentSelector = '.element-list';

  async getGroupByName(name: CategoryName) {
    const groups = await this.page.$$(this.groupSelector);
    for (const group of groups) {
      const header = await group.$(this.groupTitleSelector);

      if (!header) continue;

      const text = await this.page.evaluate(
        (el) => (el ? el.textContent?.trim() || '' : ''),
        header
      );

      if (text === name) return group;
    }
    throw new Error(`❌ Group "${name}" not found`);
  }

  async toggleGroup(name: CategoryName): Promise<void> {
    const group = await this.getGroupByName(name);
    const header = await group.$(this.groupTitleSelector);
    if (!header) throw new Error(`❌ Header not found in group "${name}"`);
    await header.click();
  }

  async getAllGroupNames(): Promise<string[]> {
    const headers = await this.page.$$(this.groupTitleSelector);
    const names = await Promise.all(
      headers.map((el) =>
        this.page.evaluate((e) => e.textContent?.trim() || '', el)
      )
    );

    return names;
  }
}
