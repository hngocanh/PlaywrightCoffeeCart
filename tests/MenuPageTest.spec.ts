// @ts-check
const { chromium, test, expect } = require('@playwright/test');
import { cartPageLocator, menuPageLocator } from '../Locators'
import { info } from './Data'
import { MenuPage } from '../PageObjects'


test('All items are visible', async ({ page }) => {

  const menuPage = new MenuPage(page);
  await menuPage.goto();


  // Expect all items are visible
  await expect(page.locator(menuPageLocator.AMERICANO)).toBeVisible();
  await expect(page.locator(menuPageLocator.CAFE_BREVE)).toBeVisible();
  await expect(page.locator(menuPageLocator.CAFE_LATTE)).toBeVisible();
  await expect(page.locator(menuPageLocator.ESPRESSO)).toBeVisible();
  await expect(page.locator(menuPageLocator.ESPRESSO_CONPANNA)).toBeVisible();
  await expect(page.locator(menuPageLocator.ESPRESSO_MACCHIATO)).toBeVisible();
  await expect(page.locator(menuPageLocator.MOCHA)).toBeVisible();
  await expect(page.locator(menuPageLocator.FLAT_WHITE)).toBeVisible();
  await expect(page.locator(menuPageLocator.CAPPUCCINO)).toBeVisible();

});


test('Items are added and checkout is successful from Menu page', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.goto();

  // Add first item
  await page.locator(menuPageLocator.AMERICANO).click();

  // Add second item
  await page.locator(menuPageLocator.CAFE_LATTE).click();

  // Checkout
  await menuPage.checkOut(info.USERNAME, info.EMAIL);

  // Click Submit
  await menuPage.submit();

  // Checkout is successful
  await expect(page.locator('text=Thanks for your purchase. Please check your email for payment.')).toBeVisible();

});


test('Hover over Total box and add/remove items', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.goto();

  // Add first item
  await page.locator(menuPageLocator.AMERICANO).click();

  // Hover over Total box
  await page.locator(menuPageLocator.CHECKOUT_BTN).hover();

  // Add more items
  await page.locator(menuPageLocator.ADD_BTN).click();
  await page.locator(menuPageLocator.ADD_BTN).click();

  // Remove items
  await page.locator(menuPageLocator.REMOVE_BTN).click();

  // Checkout
  await menuPage.checkOut(info.USERNAME, info.EMAIL);

  // Click Submit
  await menuPage.submit();

  // Checkout is successful
  await expect(page.locator('text=Thanks for your purchase. Please check your email for payment.')).toBeVisible();

});