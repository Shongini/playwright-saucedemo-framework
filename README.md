# Playwright Saucedemo Framework

A robust test automation framework built with **Playwright**, **TypeScript**, and **Allure Reports**, designed to test the [Saucedemo](https://www.saucedemo.com/) application.

## 🚀 Features

- **Page Object Model (POM):** Clean and maintainable test structure using Page Objects.
- **TypeScript:** Type-safe test code.
- **Playwright Test Runner:** Fast, reliable, and modern browser automation.
- **Allure Reporting:** Detailed test execution reports.
- **Fixtures:** Reusable test setups and teardowns.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright-saucedemo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🏃‍♂️ Running Tests

- Run all tests:
  ```bash
  npx playwright test
  ```

- Run tests withheaded mode (for debugging):
  ```bash
  npx playwright test --headed
  ```

- Generate and view Allure report:
  ```bash
  npx allure generate allure-results -o allure-report --clean
  npx allure open allure-report
  ```

## 📁 Project Structure

- `src/models`: Contains Page Object Model classes.
- `src/api`: API interaction layers.
- `src/fixtures`: Custom Playwright fixtures.
- `tests`: Test specification files.
- `allure-results`: Generated test report data.
