import { GroupPage } from '../GroupPage';

export class WidgetsPage extends GroupPage {
  protected path = '/widgets';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
