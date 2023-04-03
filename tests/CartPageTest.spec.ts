// @ts-check
const { test, expect } = require('@playwright/test');
import { cartPageLocator, menuPageLocator } from '../Locators'
import { info } from './Data'


test('Items are added and checkout is successful from Cart page', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  // Add first item
  await page.locator(menuPageLocator.AMERICANO).click();

  // Add second item
  await page.locator(menuPageLocator.CAFE_LATTE).click();

  // Go to Cart 
  await page.locator(menuPageLocator.CART).click();

  // Checkout
  await menuPage.submit();

  // Click Submit
  await page.locator(menuPageLocator.SUBMIT_BTN).click();

  // Checkout is successful
  await expect(page.locator('text=Thanks for your purchase. Please check your email for payment.')).toBeVisible();

});
