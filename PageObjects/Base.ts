// @ts-check
import { expect, Locator, Page } from '@playwright/test';
import { cartPageLocator, menuPageLocator, commonLocators } from '../Locators'


export async function isVisible(page: Page, locator: string): Promise<boolean> {
    await page.waitForSelector(locator);
    return await page.isVisible(locator);
}

export class Base {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async goto() {
        await this.page.goto('https://coffee-cart.app/');
    }

    async checkOut(NAME: string, EMAIL: string) {
        await this.page.locator(commonLocators.CHECKOUT_BTN).click();
        await this.page.locator(commonLocators.NAME).fill(NAME);
        await this.page.locator(commonLocators.EMAIL).fill(EMAIL);
    }

    async submit() {
        await this.page.locator(commonLocators.SUBMIT_BTN).click();
    }

    async addItem() {
        await this.page.locator(commonLocators.ADD_BTN).click();
    }

    async removeItem() {
        await this.page.locator(commonLocators.REMOVE_BTN).click()
    }

    async removeAll() {
        await this.page.locator(cartPageLocator.REMOVE_ALL_BTN).click();
    }


}