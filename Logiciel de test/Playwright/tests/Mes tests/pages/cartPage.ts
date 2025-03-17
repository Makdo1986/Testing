// /tests/pages/cartPage.ts
import { expect, Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartCount: Locator;
  readonly cartProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-button');
    this.cartCount = page.locator('#nav-cart-count');
    this.cartProduct = page.locator('.sc-list-item');
  }

  // Ajouter un produit au panier
  async addProductToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  // Vérifier que le produit est ajouté au panier
  async verifyProductInCart(): Promise<void> {
    await expect(this.cartCount).toHaveText('1');
    await expect(this.cartProduct).toBeVisible();
  }

  // Aller au panier
  async goToCart(): Promise<void> {
    await this.page.locator('#nav-cart').click();
  }
}
