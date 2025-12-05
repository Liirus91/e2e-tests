import { Page } from 'puppeteer';
import { closeBrowser, newPage } from '../../utils/browser';
import { TextBoxPage } from '../../pages/elements/TextBoxPage';
import { textBoxFields } from '../../data/submenus/elements/textBoxFields';

let page: Page;
let textBoxPage: TextBoxPage;

beforeAll(async () => {
  page = await newPage();
});

beforeEach(async () => {
  textBoxPage = new TextBoxPage(page);
  await textBoxPage.goto();
});

afterAll(async () => {
  await page.close();
  await closeBrowser();
});

describe('Text box page tests', () => {
  const cases = [
    { field: textBoxFields.fullName, value: 'John Doe' },
    { field: textBoxFields.email, value: 'john@mail.com' },
    { field: textBoxFields.currentAddress, value: 'Street 1' },
    { field: textBoxFields.permanentAddress, value: 'Street 2' },
  ];

  test.each(cases)('Submit field %s', async ({ field, value }) => {
    await textBoxPage.fillField(field, value);
    expect(await textBoxPage.getFieldValue(field)).toBe(value);

    await textBoxPage.submitForm();
    expect(await textBoxPage.getOutputValue(field)).toBe(value);
  });

  test('Invalid email shows validation error', async () => {
    await textBoxPage.fillField(textBoxFields.email, 'invalid-email');
    await textBoxPage.submitForm();

    expect(await textBoxPage.isInvalidEmail()).toBeTruthy();
  });
});
