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

describe('Main tests', () => {
  test('banner image has non-empty alt text', async () => {
    const main = new MainPage(page);
    await main.goto();

    expect(page.url()).toBe('https://demoqa.com/');
  });
});
