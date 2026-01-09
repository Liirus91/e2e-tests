import { CheckBoxName } from '../../data/submenus/elements/checkBoxNames';
import { ItemPage } from '../ItemPage';

export class CheckBoxPage extends ItemPage {
  protected path = '/checkbox';

  private treeNode = '.rct-node';
  private nodeTitle = '.rct-title';
  private expandButton = 'button[title="Expand all"]';
  private collapseButton = 'button[title="Collapse all"]';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }

  async expandAllNodes(): Promise<void> {
    const expandAllButton = await this.page.$(this.expandButton);
    if (expandAllButton) {
      await expandAllButton.click();
    }
  }

  async collapseAllNodes(): Promise<void> {
    const collapseAllButton = await this.page.$(this.collapseButton);
    if (collapseAllButton) {
      await collapseAllButton.click();
    }
  }

  async getBranchByName(name: CheckBoxName) {
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

  async isBranchExpanded(name: CheckBoxName): Promise<boolean> {
    try {
      const branch = await this.getBranchByName(name);
      const expanded = await branch.evaluate((el) =>
        el.classList.contains('rct-node-expanded')
      );
      return expanded;
    } catch {
      return false;
    }
  }

  async expandBranch(name: CheckBoxName): Promise<void> {
    const branch = await this.getBranchByName(name);
    const expandIcon = await branch.$('.rct-collapse');

    if (expandIcon) {
      const isExpanded = await branch.evaluate((el) =>
        el.classList.contains('rct-node-expanded')
      );
      if (!isExpanded) {
        await expandIcon.click();
      }
    }
  }

  async collapseBranch(name: CheckBoxName): Promise<void> {
    const branch = await this.getBranchByName(name);
    const collapseIcon = await branch.$('.rct-collapse');

    if (collapseIcon) {
      const isExpanded = await branch.evaluate((el) =>
        el.classList.contains('rct-node-expanded')
      );
      if (isExpanded) {
        await collapseIcon.click();
      }
    }
  }

  async areBranchesExpanded(names: CheckBoxName[]): Promise<boolean> {
    const results = await Promise.all(
      names.map((name) => this.isBranchExpanded(name))
    );

    return results.every(Boolean);
  }
}
