import { Page, expect, Locator } from '@playwright/test';

export class LinksPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    //  Méthode pour aller sur le site "url"
    async clickOnLinkTextAndCheckResponseCodeAndText(linkText: string = 'Created', linkCode: string = '201') {
        await this.page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
        await expect(
            this.page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
        ).toBeVisible() // Je vérifie que le message est visible
    }

}