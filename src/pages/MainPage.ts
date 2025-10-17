import { Page } from 'puppeteer';
import { BASE_URL } from '../constants';

export class MainPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(BASE_URL);
  }
}
