import {
  TextBoxFieldName,
  textBoxSelectors,
} from '../../data/submenus/elements/textBoxFields';
import { getInputValue, typeIntoInput } from '../../utils/inputs';
import { ItemPage } from '../ItemPage';

export class TextBoxPage extends ItemPage {
  protected path = '/text-box';

  private submitButtonSelector = '#submit';

  protected get selectors() {
    return {
      ...super.selectors,
    };
  }

  async fillField(field: TextBoxFieldName, value: string) {
    const selector = textBoxSelectors[field].input;
    await typeIntoInput(this.page, selector, value);
  }

  async getFieldValue(field: TextBoxFieldName) {
    const selector = textBoxSelectors[field].input;
    return getInputValue(this.page, selector);
  }

  async submitForm() {
    await this.page.click(this.submitButtonSelector);
  }

  async getOutputValue(field: TextBoxFieldName) {
    const selector = textBoxSelectors[field].output;
    await this.page.waitForSelector(selector, {
      visible: true,
    });
    const text = await this.page.$eval(selector, (el) => el.textContent || '');

    return text.replace(/^.*:\s*/, '').trim();
  }

  async isInvalidEmail(): Promise<boolean> {
    const emailInputSelector = textBoxSelectors.email.input;
    const emailInputClasses = await this.page.$eval(
      emailInputSelector,
      (el) => el.className
    );

    return emailInputClasses.includes('field-error');
  }
}
