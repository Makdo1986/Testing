import { Page, expect, Locator } from '@playwright/test';

export class MenuSection {
    
    readonly page: Page
    readonly textForm: Locator
    
    constructor(page: Page) {
        this.page = page;
        this.textForm = this.page.getByText('Please select an item from')
    }

    //  Méthode pour aller sur le site "url"
    async checkOnMenuSection() {
        await expect(this.textForm).toBeVisible;
    }

    //  Méthode pour aller sur le menu "menuName"
    async goToSubMenu(subMenuName: string = '') {
        
        // On récupère le locator associé à "menuName"
        let subMenuLocator = this.page.getByText(subMenuName, { exact: true })
        // On récupère le locator associé au header nommé "menuName"
        let headerSubMenu = this.page.getByRole('heading', { name: subMenuName, exact: true })

        await expect(subMenuLocator).toBeVisible()
        await subMenuLocator.click(); // Je clique sur le sous menu
        if (subMenuName != 'Profile') {
            expect(headerSubMenu).toBeVisible(); // Je vérifie que le titre est visible
        } else {
            expect(this.page.getByText('Currently you are not logged')).toBeVisible()
        }
    }

}