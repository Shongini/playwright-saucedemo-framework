import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [['list'], ['allure-playwright']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
  },
});
