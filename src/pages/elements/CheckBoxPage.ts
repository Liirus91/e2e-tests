import { ItemPage } from '../ItemPage';

export class CheckBoxPage extends ItemPage {
  protected path = '/checkbox';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }

  async expandAllNodes(): Promise<void> {
    const expandAllButton = await this.page.$('button[title="Expand all"]');
    if (expandAllButton) {
      await expandAllButton.click();
    }
  }

  async collapseAllNodes(): Promise<void> {
    const collapseAllButton = await this.page.$('button[title="Collapse all"]');
    if (collapseAllButton) {
      await collapseAllButton.click();
    }
  }
}
