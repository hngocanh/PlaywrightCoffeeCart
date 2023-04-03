// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';
import { cartPageLocator, menuPageLocator } from '../Locators'

export class MenuPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async goto() {
        await this.page.goto('https://coffee-cart.app/');
    }

    async checkOut(NAME: string, EMAIL: string) {
        await this.page.locator(menuPageLocator.CHECKOUT_BTN).click();
        await this.page.locator(menuPageLocator.NAME).fill(NAME);
        await this.page.locator(menuPageLocator.EMAIL).fill(EMAIL);
    }

    async submit() {
        await this.page.locator(menuPageLocator.SUBMIT_BTN).click();
    }


}