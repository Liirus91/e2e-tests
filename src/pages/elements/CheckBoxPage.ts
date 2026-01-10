import { CheckBoxName } from '../../data/submenus/elements/checkBoxNames';
import { ItemPage } from '../ItemPage';

export class CheckBoxPage extends ItemPage {
  protected path = '/checkbox';

  private treeNode = '.rct-node';
  private nodeTitle = '.rct-title';
  private expandButton = 'button[title="Expand all"]';
  private collapseButton = 'button[title="Collapse all"]';
  private checkBox = '.rct-checkbox svg';
  private checkIconClass = 'rct-icon-check';
  private branchExpandedClass = 'rct-node-expanded';
  private branchCollapse = 'rct-collapse';

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
      const expanded = await branch.evaluate(
        (el, branchExpandedClass) => el.classList.contains(branchExpandedClass),
        this.branchExpandedClass
      );
      return expanded;
    } catch {
      return false;
    }
  }

  async expandBranch(name: CheckBoxName): Promise<void> {
    const branch = await this.getBranchByName(name);
    const expandIcon = await branch.$(this.branchCollapse);

    if (expandIcon) {
      const isExpanded = await branch.evaluate(
        (el, branchExpandedClass) => el.classList.contains(branchExpandedClass),
        this.branchExpandedClass
      );
      if (!isExpanded) {
        await expandIcon.click();
      }
    }
  }

  async collapseBranch(name: CheckBoxName): Promise<void> {
    const branch = await this.getBranchByName(name);
    const collapseIcon = await branch.$(this.branchCollapse);

    if (collapseIcon) {
      const isExpanded = await branch.evaluate(
        (el, branchExpandedClass) => el.classList.contains(branchExpandedClass),
        this.branchExpandedClass
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

  async toggleCheckbox(name: CheckBoxName): Promise<void> {
    const branch = await this.getBranchByName(name);
    const checkbox = await branch.$(this.checkBox);

    if (checkbox) {
      await checkbox.click();
    }
  }

  async isCheckboxChecked(name: CheckBoxName): Promise<boolean> {
    const branch = await this.getBranchByName(name);
    const checkbox = await branch.$(this.checkBox);

    if (checkbox) {
      const isChecked = await checkbox.evaluate(
        (el, checkIconClass) => el.classList.contains(checkIconClass),
        this.checkIconClass
      );
      return isChecked;
    }

    return false;
  }
}
