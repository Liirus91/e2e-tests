import { Page } from 'puppeteer';
import { closeBrowser, newPage } from '../../utils/browser';
import { MainPage } from '../../pages/MainPage';
import { Categories } from '../../data/categories';
import { elementsItems } from '../../data/itemsOfCategories';
import { TextBoxPage } from '../../pages/elements/TextBoxPage';

let page: Page;

beforeAll(async () => {
  page = await newPage();
});

afterAll(async () => {
  await page.close();
  await closeBrowser();
});

describe('Text box page tests', () => {
  test('Link to Text box page work', async () => {
    const mainPage = new MainPage(page);
    await mainPage.goto();

    const elementsPage = await mainPage.clickCategoryByName(
      Categories.ELEMENTS
    );
    const textBoxPage = await elementsPage.clickToItem(elementsItems.TEXT_BOX);
    console.log(await textBoxPage.getCurrentUrl());
    const url = await textBoxPage.getCurrentUrl();

    expect(url.toLowerCase()).toContain('text-box');
    expect(await textBoxPage.getPageTitle()).toBe(elementsItems.TEXT_BOX);
  });

  test('Test', async () => {
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();
  });
});
