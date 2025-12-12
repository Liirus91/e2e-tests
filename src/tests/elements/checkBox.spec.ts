import { Page } from 'puppeteer';
import { closeBrowser, newPage } from '../../utils/browser';
import { CheckBoxPage } from '../../pages/elements/CheckBoxPage';
import { textBoxFields } from '../../data/submenus/elements/textBoxFields';

let page: Page;
let checkBoxPage: CheckBoxPage;

beforeAll(async () => {
  page = await newPage();
});

beforeEach(async () => {
  checkBoxPage = new CheckBoxPage(page);
  await checkBoxPage.goto();
});

afterAll(async () => {
  await page.close();
  await closeBrowser();
});

describe('Check box page tests', () => {
  test.skip('Expend all nodes', async () => {});
});
