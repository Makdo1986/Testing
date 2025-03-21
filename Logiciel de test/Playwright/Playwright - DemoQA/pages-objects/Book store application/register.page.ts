import { Page, expect } from '@playwright/test';

export class RegisterPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    // Méthode pour vérifier que la page "Register" est bien affichée
    async checkRegisterVisible() {
        expect(this.page.getByRole('heading', { name: 'Register', exact: true })).toBeVisible() // Je vérifie que le titre est visible
    }

    // Méthode pour renseigner les données de compte 
    async fillFormRegister(textLocator:string = 'First Name', value: string = 'Matthieu') {
        let locator = this.page.getByRole('textbox', { name: textLocator })
        await locator.clear()
        await locator.fill(value) 
        expect(locator).toHaveValue(value) // Vérifier que le champs texte contient bien la "value"
    }

    // Méthode pour soumettre le formulaire "Register"
    async submitFormRegister() {
        await this.page.getByRole('button', { name: 'Register' }).click()
    }

}