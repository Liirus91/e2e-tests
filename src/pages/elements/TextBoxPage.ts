import { getInputValue, typeIntoInput } from '../../utils/inputs';
import { ItemPage } from '../ItemPage';

export class TextBoxPage extends ItemPage {
  protected path = '/text-box';
  protected nameInputSelector = '#userName';
  protected nameOutputSelector = '#name';
  protected submitButtonSelector = '#submit';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }

  async fillFullName(text: string) {
    await typeIntoInput(this.page, this.nameInputSelector, text);
  }

  async getFullName() {
    return await getInputValue(this.page, this.nameInputSelector);
  }

  async submitForm() {
    await this.page.click(this.submitButtonSelector);
  }

  async getFullNameOutput() {
    await this.page.waitForSelector(this.nameOutputSelector, { visible: true });
    return (
      await this.page.$eval(
        this.nameOutputSelector,
        (el) => el.textContent || ''
      )
    ).split(':')[1];
  }
}
