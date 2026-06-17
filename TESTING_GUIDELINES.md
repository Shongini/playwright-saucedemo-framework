# Testing Guidelines & Standards

This document outlines the mandatory standards for generating test cases within this Playwright framework.

## 1. Architectural Standards
- **Page Object Model (POM):** Every UI interaction MUST be encapsulated within a Page Object class in `src/models/`.
- **Fixtures:** Shared dependencies (pages, data, API clients) MUST be defined in `src/fixtures/` and injected into tests. Do not instantiate pages directly in test files.
- **Assertions:** Use Playwright's `expect` web-first assertions. Avoid arbitrary `wait` commands.

## 2. Test Structure
- **Organization:** Use `test.describe` to group tests by functionality/module.
- **Naming Convention:** Test names must be descriptive (e.g., `test('should allow user to login with valid credentials', ...)`).
- **Independence:** Each test must be atomic and independent. Use `beforeEach` for setup (e.g., navigation, login) if necessary.

## 3. Data Management
- **Test Data Factory:** Use `src/factories/` for generating dynamic test data (e.g., Faker.js). Do not hardcode test data unless necessary for specific test logic.

## 4. Quality & Maintenance
- **Error Handling:** Explicitly test negative scenarios and validate error messages as defined in functional requirements.
- **Tags:** Use test tags (e.g., `@smoke`, `@regression`, `@api`) for granular test execution control in CI/CD.
- **Reporting:** All tests must be compatible with the configured Allure report reporter.

## 5. CI/CD Integration
- Every new feature/test suite MUST be reflected in the GitHub Actions configuration (`.github/workflows/playwright.yml`) if specific triggers or parallelization strategies are needed.
