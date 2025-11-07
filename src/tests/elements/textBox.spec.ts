import { Page } from 'puppeteer';
import { closeBrowser, newPage } from '../../utils/browser';
import { MainPage } from '../../pages/MainPage';
import { Categories } from '../../data/categories';

let page: Page;

beforeAll(async () => {
  page = await newPage();
});

afterAll(async () => {
  await page.close();
  await closeBrowser();
});

describe('Main UI tests', () => {
  test('Main page has visible logo, nav menu and footer', async () => {
    const mainPage = new MainPage(page);
    await mainPage.goto();

    const elementsPage = await mainPage.clickCategoryByName(
      Categories.ELEMENTS
    );
    const textBoxPage = await elementsPage.clickToItem('Text Box');
    const url = await textBoxPage.getCurrentUrl();

    expect(url.toLowerCase()).toContain(expectedUrlPart);
  });
});
