import { Page, expect } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly url: string = 'https://demoqa.com/'
    
    constructor(page: Page) {
        this.page = page
    }

    //  Méthode pour aller sur le site "url"
    async navigateToWebsite() {
        await this.page.goto(this.url)
        //await expect(this.page).toHaveTitle(/demoqa/);
    }

    //  Méthode pour aller sur le menu "menuName"
    async goToMenu(menuName: string) {
        // On récupère le locator associé à "menuName"
        let menuLocator = this.page.getByRole('heading', { name: menuName }) 
        await expect(menuLocator).toBeVisible() //
        await menuLocator.click(); // Je clique sur le menu "menuName"
    }
}