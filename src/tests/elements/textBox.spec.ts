import { Page } from 'puppeteer';
import { closeBrowser, newPage } from '../../utils/browser';
import { TextBoxPage } from '../../pages/elements/TextBoxPage';

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
  test('Should submit full name and show correct output', async () => {
    const fullName = 'John Doe';
    await textBoxPage.fillFullName(fullName);

    const enteredFullName = await textBoxPage.getFullName();
    expect(enteredFullName).toBe(fullName);

    await textBoxPage.submitForm();

    expect(await textBoxPage.getFullNameOutput()).toBe(fullName);
  });
});
