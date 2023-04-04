// @ts-check
const { test, expect } = require('@playwright/test');
import { cartPageLocator, commonLocators, menuPageLocator } from '../Locators'
import { info } from './Data'
import { MenuPage, Base } from '../PageObjects'


test('Items are added and checkout is successful from Cart page', async ({ page }) => {
  const base = new Base(page);
  await base.goto();

  // Add first item
  await page.locator(menuPageLocator.AMERICANO).click();

  // Add second item
  await page.locator(menuPageLocator.CAFE_LATTE).click();

  // Go to Cart 
  await page.locator(commonLocators.CART).click();

  // Checkout
  await base.checkOut(info.USERNAME, info.EMAIL);

  // Click Submit
  await base.submit();

  // Checkout is successful
  await expect(page.locator('text=Thanks for your purchase. Please check your email for payment.')).toBeVisible();

});
