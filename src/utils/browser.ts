import puppeteer, { Browser, Page, LaunchOptions } from 'puppeteer';

let browser: Browser | null = null;

export async function getBrowser(): Promise<Browser> {
  if (!browser) {
    const launchOptions: LaunchOptions = {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    };
    browser = await puppeteer.launch(launchOptions);
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
