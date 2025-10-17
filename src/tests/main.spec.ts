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

describe('Main tests UI tests', () => {
  test('Main page has visible logo, nav menu and footer', async () => {
    const main = new MainPage(page);
    await main.goto();

    expect(await main.isLogoVisible()).toBe(true);
    expect(await main.isCategoriesMenuVisible()).toBe(true);
    expect(await main.isFooterVisible()).toBe(true);
  });
});
