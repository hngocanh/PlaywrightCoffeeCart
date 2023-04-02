// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';
import { cartPageLocator, menuPageLocator  } from '../Locators'

export class MenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

  }

  async goto() {
    await this.page.goto('https://coffee-cart.app/');
  }

}