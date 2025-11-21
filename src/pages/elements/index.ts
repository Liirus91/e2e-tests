import { itemToPageMap } from '../../data/itemsMap';
import { ElementsItemName } from '../../data/itemsOfCategories';
import { GroupPage } from '../GroupPage';

export class ElementsPage extends GroupPage {
  protected path = '/elements';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }

  async clickToItem(name: ElementsItemName) {
    await super.clickToItem(name);
    const PageClass = itemToPageMap[name];
    return new PageClass(this.page);
  }
}
