// @ts-check
const { test, expect } = require('@playwright/test');
import { cartPageLocator } from '../Locators/CartPage'
import { menuPageLocator } from '../Locators/MenuPage'
import { info } from '../TestData/Data'
import { MenuPage } from '../PageObjects/MenuPage'

test('All items are visible', async ({ page }) => {

  const menuPage = new MenuPage(page);
  await menuPage.goto();

  // Expect all items are visible
  await expect(page.locator(menuPageLocator.americano)).toBeVisible();
  await expect(page.locator(menuPageLocator.cafeBreve)).toBeVisible();
  await expect(page.locator(menuPageLocator.cafeLatte)).toBeVisible();
  await expect(page.locator(menuPageLocator.espresso)).toBeVisible();
  await expect(page.locator(menuPageLocator.espressoConPanna)).toBeVisible();
  await expect(page.locator(menuPageLocator.espressoMacchiato)).toBeVisible();
  await expect(page.locator(menuPageLocator.mocha)).toBeVisible();
  await expect(page.locator(menuPageLocator.flatWhite)).toBeVisible();
  await expect(page.locator(menuPageLocator.cappuccino)).toBeVisible();

});


test('Items are added and checkout is successful from Menu page', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.goto();

  // Add first item
  await page.locator(menuPageLocator.americano).click();

  // Add second item
  await page.locator(menuPageLocator.cafeLatte).click();

  // Checkout
  await menuPage.checkOut();

  // Click Submit
  await menuPage.submit();
  
  // Checkout is successful
  await expect(page.locator('text=Thanks for your purchase. Please check your email for payment.')).toBeVisible();

});


test('Hover over Total box and add/remove items', async ({ page }) => {
    const menuPage = new MenuPage(page);
  await menuPage.goto();

  // Add first item
  await page.locator(menuPageLocator.americano).click();

  // Hover over Total box
  await page.locator(menuPageLocator.checkOutButton).hover();

  // Add more items
  await page.locator(menuPageLocator.addButton).click();
  await page.locator(menuPageLocator.addButton).click();

  // Remove items
  await page.locator(menuPageLocator.removeButton).click();

  // Checkout
  await page.locator(menuPageLocator.checkOutButton).click();
  await page.locator(menuPageLocator.name).fill(info.userName);
  await page.locator(menuPageLocator.email).fill(info.email);

  // Click Submit
  await page.locator(menuPageLocator.submitButton).click();

  // Checkout is successful
  await expect(page.locator('text=Thanks for your purchase. Please check your email for payment.')).toBeVisible();

});