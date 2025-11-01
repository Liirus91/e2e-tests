import { GroupPage } from '../GroupPage';

export class AlertsPage extends GroupPage {
  protected path = '/alertsWindows';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }
}
