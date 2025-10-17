import { Page as PuppeteerPage } from 'puppeteer';
import { BASE_URL } from '../constants';

export abstract class BasePage {
  protected page: PuppeteerPage;
  protected abstract path: string;
  protected baseUrl = BASE_URL;

  constructor(page: PuppeteerPage) {
    this.page = page;
  }

  protected get selectors() {
    return {
      logo: 'header a',
      footer: 'footer span',
    };
  }

  get url() {
    return `${this.baseUrl}${this.path}`;
  }

  async goto() {
    await this.page.goto(this.url, { waitUntil: 'networkidle0' });
  }

  async clickLogo() {
    await this.page.waitForSelector(this.selectors.logo, { visible: true });
    await this.page.click(this.selectors.logo);
  }

  async isLogoVisible(): Promise<boolean> {
    return this.page.$(this.selectors.logo).then((el) => el !== null);
  }

  async isFooterVisible(): Promise<boolean> {
    return this.page.$(this.selectors.footer).then((el) => el !== null);
  }
}
