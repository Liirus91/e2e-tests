import { newPage, closeBrowser } from '../utils/browser';
import { MainPage } from '../pages/MainPage';
import { Page } from 'puppeteer';

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
});
