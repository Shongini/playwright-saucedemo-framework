import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly inventoryItems = this.page.locator('.inventory_item');
  readonly sortDropdown = this.page.locator('.product_sort_container');
  readonly cartBadge = this.page.locator('.shopping_cart_badge');
  readonly burgerMenu = this.page.locator('#react-burger-menu-btn');
  readonly logoutLink = this.page.locator('#logout_sidebar_link');

  async addToCart(itemName: string) {
    await this.page.locator(`text=${itemName}/..//button`).click();
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }
}
