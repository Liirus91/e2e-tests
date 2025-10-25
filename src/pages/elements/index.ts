import { GroupPage } from '../GroupPage';

export class ElementsPage extends GroupPage {
  protected path = '/elements';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
