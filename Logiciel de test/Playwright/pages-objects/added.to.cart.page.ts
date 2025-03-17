import { type Page, type Locator, expect } from '@playwright/test';

export class AddedToCartPage {
    readonly page: Page;
    readonly addedToCart: Locator;
    readonly checkOutButton: Locator;
    readonly goToCartButton: Locator;
    readonly subTotal: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addedToCart = page.getByRole('heading', { name: 'Ajouté au panier' });
        this.checkOutButton = page.getByRole('button', { name: 'Passer la commande (1 article)' });
        this.goToCartButton = page.locator('#sw-gtc').getByRole('link', { name: 'Aller au panier' });
        this.subTotal = page.getByText('Sous-total du panier :');
    }

    async goToCart() {
        await expect(this.addedToCart).toBeVisible();
        await expect(this.checkOutButton).toBeVisible();
        await expect(this.goToCartButton).toBeVisible();
        await expect(this.subTotal).toBeVisible();
        await this.checkOutButton.click();
    }
}