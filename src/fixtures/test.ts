import { test as base } from '@playwright/test';
import { LoginPage } from '../models/LoginPage';
import { InventoryPage } from '../models/InventoryPage';

export const test = base.extend<{ loginPage: LoginPage; inventoryPage: InventoryPage }>({
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  inventoryPage: async ({ page }, use) => { await use(new InventoryPage(page)); },
});
export { expect } from '@playwright/test';
