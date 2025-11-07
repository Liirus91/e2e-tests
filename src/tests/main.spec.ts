import { newPage, closeBrowser } from '../utils/browser';
import { MainPage } from '../pages/MainPage';
import { Page } from 'puppeteer';
import { Categories, CategoryName } from '../data/categories';

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

describe('Main Page categories navigation', () => {
  const categories: [CategoryName, string][] = [
    [Categories.ELEMENTS, 'elements'],
    [Categories.FORMS, 'forms'],
    [Categories.ALERTS, 'alerts'],
    [Categories.WIDGETS, 'widgets'],
    [Categories.INTERACTIONS, 'interaction'],
    [Categories.BOOKS_API, 'books'],
  ];

  test.each(categories)(
    'Category %s opens correct page',
    async (category: CategoryName, expectedUrlPart: string) => {
      const mainPage = new MainPage(page);
      await mainPage.goto();

      const pageInstance = await mainPage.clickCategoryByName(category);
      const url = await pageInstance.getCurrentUrl();

      expect(url.toLowerCase()).toContain(expectedUrlPart);
    }
  );
});
