import { GroupPage } from '../GroupPage';

export class InteractionPage extends GroupPage {
  protected path = '/interaction';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
