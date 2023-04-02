const { expect } = require('@playwright/test');
// import { cartPageLocator } from '../Locators/CartPage'
// import { menuPageLocator } from '../Locators/MenuPage'
// import { info } from '../TestData/Data'

exports.MenuPage = class MenuPage {

    constructor(page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://coffee-cart.app/');
    }    

}