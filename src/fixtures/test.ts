import { test as base } from '@playwright/test';
import { LoginPage } from '../models/LoginPage';
import { InventoryPage } from '../models/InventoryPage';
import { CheckoutPage } from '../models/CheckoutPage';
import { BaseApi } from '../api/BaseApi';

export const test = base.extend<{ 
  loginPage: LoginPage; 
  inventoryPage: InventoryPage;
  checkoutPage: CheckoutPage;
  api: BaseApi;
}>({
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  inventoryPage: async ({ page }, use) => { await use(new InventoryPage(page)); },
  checkoutPage: async ({ page }, use) => { await use(new CheckoutPage(page)); },
  api: async ({ request }, use) => { await use(new BaseApi(request)); },
});
export { expect } from '@playwright/test';
