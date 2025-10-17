import { newPage, closeBrowser } from '../utils/browser';
import { MainPage } from '../pages/MainPage';
import { Page } from 'puppeteer';
import { isElementVisible } from '../utils/pageHelpers';

let page: Page;

beforeAll(async () => {
  page = await newPage();
});

afterAll(async () => {
  await page.close();
  await closeBrowser();
});

describe('Main tests', () => {
  test('Main page have logo, nav menu and footer', async () => {
    const main = new MainPage(page);
    await main.goto();

    expect(await isElementVisible(page, 'header a')).toBe(true);
    expect(await isElementVisible(page, '.category-cards')).toBe(true);
    expect(await isElementVisible(page, 'footer span')).toBe(true);
  });
});
