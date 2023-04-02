// @ts-check
const { test, expect } = require('@playwright/test');
import { cartPageLocator, menuPageLocator  } from '../Locators'
import { info } from '../TestData/Data'


test('Items are added and checkout is successful from Cart page', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  // Add first item
  await page.locator(menuPageLocator.americano).click();

  // Add second item
  await page.locator(menuPageLocator.cafeLatte).click();

  // Go to Cart 
  await page.locator(menuPageLocator.cart).click();

  // Checkout
  await page.locator(menuPageLocator.checkOutButton).click();
  await page.locator(menuPageLocator.name).fill(info.userName);
  await page.locator(menuPageLocator.email).fill(info.email);

  // Click Submit
  await page.locator(menuPageLocator.submitButton).click();

  // Checkout is successful
  await expect(page.locator('text=Thanks for your purchase. Please check your email for payment.')).toBeVisible();

});
