import { Page as PuppeteerPage } from 'puppeteer';

export async function typeIntoInput(
  page: PuppeteerPage,
  selector: string,
  text: string
) {
  await page.waitForSelector(selector, { visible: true });

  await page.click(selector, { clickCount: 3 });
  await page.keyboard.press('Backspace');

  await page.keyboard.type(text);
}

export async function getInputValue(page: PuppeteerPage, selector: string) {
  await page.waitForSelector(selector, { visible: true });

  return await page.$eval(
    selector,
    (el) => (el as HTMLInputElement | HTMLTextAreaElement).value
  );
}
