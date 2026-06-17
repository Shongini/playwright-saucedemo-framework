import { test, expect } from '../src/fixtures/test';

test.describe('SauceDemo E2E Suite', () => {

  test('Login, CRUD (Cart), and Logout', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    
    await inventoryPage.logout();
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('Filters and Validation', async ({ loginPage, inventoryPage }) => {
    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');
    
    await inventoryPage.sortDropdown.selectOption('lohi');
    const prices = await inventoryPage.inventoryItems.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
    expect(numericPrices[0]).toBeLessThanOrEqual(numericPrices[1]);
  });
});
