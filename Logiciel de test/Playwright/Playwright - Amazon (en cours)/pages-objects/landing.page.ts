import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly url: string = 'https://www.amazon.fr/';
    readonly searchBox: Locator;
    readonly cookieButton: Locator;
    readonly product: Locator;
    readonly identificationButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.getByRole('searchbox', { name: 'Rechercher Amazon.fr' });
        this.cookieButton = page.getByRole('button', { name: 'Accepter' });
        this.product = page.getByRole('button', { name: 'tablette', exact: true });
        this.identificationButton = page.getByRole('link', { name: 'Bonjour, Identifiez-vous' });
    }

    async navigateToWebsite() {
        await this.page.goto(this.url);
        await expect(this.page).toHaveTitle(/Amazon/);
        await this.cookieButton.click();
    }

    async searchForProduct(element: string = 'tablette') {
        await expect(this.searchBox).toBeVisible;
        await this.searchBox.click();
        await this.searchBox.fill(element);
        await this.product.click();
    }

    async goToIdentification() {
        expect(this.identificationButton).toBeVisible;
        await this.identificationButton.click();
    }
}