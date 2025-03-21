import type { Page, Locator } from '@playwright/test';

export class ProductListPage {
    readonly page: Page;
    readonly product: Locator;
    readonly productTitle: Locator;


    constructor(page: Page) {
        this.page = page;
        this.product = page.getByRole('link', { name: 'Lenovo Tab P12 - Tablette' }).first();
        this.productTitle = page.getByRole('link', { name: 'Lenovo Tab P12 - Tablette' }).nth(1);
    }

    async selectProductInCatalog() {
        await this.product.click();
        //await this.productTitle.click();
    }
}