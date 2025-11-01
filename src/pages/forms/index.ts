import { GroupPage } from '../GroupPage';

export class FormsPage extends GroupPage {
  protected path = '/forms';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
