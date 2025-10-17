import puppeteer, { Browser, Page } from 'puppeteer';

let browser: Browser | null = null;

export async function getBrowser(): Promise<Browser> {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: process.env.HEADLESS !== 'false',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--window-size=1920,1080',
      ],
      slowMo: process.env.SLOWMO ? parseInt(process.env.SLOWMO) : 0,
      defaultViewport:
        process.env.HEADLESS === 'false' ? { width: 1920, height: 1080 } : null,
    });
  }

  return browser;
}

export async function newPage(): Promise<Page> {
  const b = await getBrowser();
  const page = await b.newPage();

  await page.setViewport({ width: 1280, height: 800 });
  page.setDefaultTimeout(15_000);
  return page;
}

export async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;
  }
}
