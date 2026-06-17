import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('#user-name');
  readonly passwordInput = this.page.locator('#password');
  readonly loginButton = this.page.locator('#login-button');
  readonly errorMessage = this.page.locator('[data-test="error"]');

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
