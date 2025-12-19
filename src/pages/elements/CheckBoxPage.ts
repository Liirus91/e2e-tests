import { ItemPage } from '../ItemPage';

export class CheckBoxPage extends ItemPage {
  protected path = '/checkbox';

  private treeNode = '.rct-node';
  private nodeTitle = '.rct-title';
  private expandButton = '.rct-collapse-btn';

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

  async getBranchByName(name: string) {
    const nodes = await this.page.$$(this.treeNode);

    for (const node of nodes) {
      const title = await node.$(this.nodeTitle);
      if (!title) continue;

      const text = await this.page.evaluate(
        (el) => el.textContent?.trim(),
        title
      );

      if (text === name) {
        return node;
      }
    }

    throw new Error(`❌ Checkbox branch "${name}" not found`);
  }
}
