import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly firstNameInput = this.page.locator('#first-name');
  readonly lastNameInput = this.page.locator('#last-name');
  readonly postalCodeInput = this.page.locator('#postal-code');
  readonly continueButton = this.page.locator('#continue');
  readonly finishButton = this.page.locator('#finish');
  readonly completeHeader = this.page.locator('.complete-header');

  async fillForm(first: string, last: string, zip: string) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.postalCodeInput.fill(zip);
  }
}
