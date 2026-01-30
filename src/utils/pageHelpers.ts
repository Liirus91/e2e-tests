import { Page } from 'puppeteer';

export async function isElementVisible(
  page: Page,
  selector: string
): Promise<boolean> {
  try {
    await page.waitForSelector(selector, { visible: true, timeout: 3000 });
    const visible = await page.$eval(selector, (el) => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        rect.width > 0 &&
        rect.height > 0
      );
    });
    return visible;
  } catch {
    return false;
  }
}

export const capitalizeFirst = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
};
