import { expect, Locator, Page } from '@playwright/test';
// import { cartPageLocator } from '../Locators/CartPage'
import { menuPageLocator } from '../Locators/MenuPage'
import { info } from '../TestData/Data'

exports.MenuPage = class MenuPage {

    constructor(page) {
        this.page = page;
        this.checkOutButton = page.locator(menuPageLocator.CHECKOUT_BTN);
        this.name = page.locator(menuPageLocator.NAME);
        this.email = page.locator(menuPageLocator.EMAIL);
        this.submitButton = page.locator(menuPageLocator.SUBMIT_BTN);
    }
    async goto() {
        await this.page.goto('https://coffee-cart.app/');
    }
    async checkOut() {
        await this.checkOutButton.click();
        await this.name.fill(info.userName);
        await this.email.fill(info.email);
    }
    async submit() {
        await this.submitButton.click();
    }

};