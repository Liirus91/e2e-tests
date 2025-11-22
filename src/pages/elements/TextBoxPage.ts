import { getInputValue, typeIntoInput } from '../../utils/inputs';
import { ItemPage } from '../ItemPage';

export class TextBoxPage extends ItemPage {
  protected path = '/text-box';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }

  async fillFullName(text: string) {
    await typeIntoInput(this.page, '#userName', text);
  }

  async getFullName() {
    return await getInputValue(this.page, '#userName');
  }
}
