// @ts-check
import { expect, Locator, Page } from '@playwright/test';
import { cartPageLocator, menuPageLocator, commonLocators } from '../Locators'
import { Base } from './Base';

export class MenuPage extends Base {
    readonly page: Page;


    async hover() {
        await this.page.locator(commonLocators.CHECKOUT_BTN).hover();
    }


}