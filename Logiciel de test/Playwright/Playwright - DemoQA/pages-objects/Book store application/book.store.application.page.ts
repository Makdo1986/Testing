import { Page, expect } from '@playwright/test';

export class BookStoreApplicationPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    // Méthode pour vérifier que la page "Currently you are not logged" est bien affichée
    async checkNotLoggedVisible() {
        await expect(this.page.getByText('Currently you are not logged')).toBeVisible()
    }

    //  Méthode pour cliquer sur "Register"
    async clickRegisterLink() {
        var registerLocator = this.page.getByRole('link', { name: 'register' }) // Je variabilise le lien "Register"
        await expect(registerLocator).toBeVisible() // Je vérifie qu'il est bien visible
        await registerLocator.click() // Puis je clique dessus.
    }

}