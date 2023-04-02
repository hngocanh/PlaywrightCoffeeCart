const { expect } = require('@playwright/test');
// import { cartPageLocator } from '../Locators/CartPage'
import { menuPageLocator } from '../Locators/MenuPage'
import { info } from '../TestData/Data'

exports.MenuPage = class MenuPage {

    constructor(page) {
        this.page = page;
        this.checkOutButton = page.locator(menuPageLocator.checkOutButton);
        this.name = page.locator(menuPageLocator.name);
        this.email = page.locator(menuPageLocator.email);
        this.submitButton = page.locator(menuPageLocator.submitButton);
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