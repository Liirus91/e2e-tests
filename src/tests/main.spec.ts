import { newPage, closeBrowser } from '../utils/browser';
import { MainPage } from '../pages/MainPage';
import { Page } from 'puppeteer';
import { Categories } from '../data/categories';
import { ElementsPage } from '../pages/elements';

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

    expect(await mainPage.isLogoVisible()).toBe(true);
    expect(await mainPage.isCategoriesMenuVisible()).toBe(true);
    expect(await mainPage.isFooterVisible()).toBe(true);
  });

  test('Clicking to elements category in main page', async () => {
    const mainPage = new MainPage(page);
    await mainPage.goto();

    const elementsPage = await mainPage.clickCategoryByName(
      Categories.ELEMENTS
    );

    expect(await elementsPage.isLogoVisible()).toBe(true);
    expect(await elementsPage.isFooterVisible()).toBe(true);
    expect(await elementsPage.getCurrentUrl()).toContain('elements');
  });
});
