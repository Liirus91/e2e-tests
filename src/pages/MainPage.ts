import { Page } from 'puppeteer';

export class MainPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demoqa.com/');
  }
}
