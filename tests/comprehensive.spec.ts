import { test, expect } from '../src/fixtures/test';

test.describe('Authentication & Permissions', () => {

  test('should login and logout successfully', async ({ loginPage, inventoryPage }) => {
    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.logout();
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('should block locked out user', async ({ loginPage }) => {
    await loginPage.navigate('/');
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toContainText('locked out');
  });

  test('should restrict access to inventory without login', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page).toHaveURL('/');
    await expect(page.locator('#login-button')).toBeVisible();
  });
});

test.describe('Inventory CRUD & Search/Filter', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should add and remove item from cart (CRUD)', async ({ inventoryPage }) => {
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.addToCart('Sauce Labs Backpack'); // Remove
    await expect(inventoryPage.cartBadge).toBeHidden();
  });

  test('should sort products by price low to high', async ({ inventoryPage }) => {
    await inventoryPage.sortDropdown.selectOption('lohi');
    const prices = await inventoryPage.inventoryItems.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
    for (let i = 0; i < numericPrices.length - 1; i++) {
      expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
    }
  });
});

test.describe('Checkout & Validation', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should validate empty checkout form', async ({ inventoryPage, page, checkoutPage }) => {
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await page.goto('/cart.html');
    await page.locator('#checkout').click();
    await checkoutPage.continueButton.click();
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });
});
