import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage {
    
    readonly page: Page;
    readonly loginForm: Locator;
    readonly goOnButton: Locator;
    readonly claimAlert: Locator;
    readonly alertMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginForm = page.getByRole('textbox', { name: 'Adresse e-mail ou numéro de t' });
        this.goOnButton = page.getByRole('button', { name: 'Continuer' });
        this.claimAlert = page.locator('#auth-email-invalid-claim-alert i');
        this.alertMessage = page.getByText('Adresse e-mail ou numéro de téléphone portable incorrect ou invalide. Veuillez');
    }

    async login() {
        await this.page.fill('input[name="email"]', '');
        await this.page.fill('input[name="password"]', '');
        await this.page.click('button[type="submit"]');
    }

    async enterWrongCredentials() {
        expect(this.loginForm).toBeVisible;
        await this.loginForm.fill('toto@tata');
        expect(this.goOnButton).toBeVisible;
        await this.goOnButton.click();
        expect(this.claimAlert).toBeVisible;
        expect(this.alertMessage).toBeVisible;
    }
}