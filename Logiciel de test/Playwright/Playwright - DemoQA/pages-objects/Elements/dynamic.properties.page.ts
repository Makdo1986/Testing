import { Page, expect, Locator } from '@playwright/test';

export class DynamicPropertiesPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    //  Méthode pour vérifier le changement de couleur après 5 secondes
    async checkChangeColorText() {
        var colorChangeButton = await this.page.getByRole('button', { name: 'Color Change' })
        var colorInit = await colorChangeButton.evaluate((el) => getComputedStyle(el).color) // Je récupère la couleur initiale
        console.log('Initial color text :', colorInit)
        await this.page.waitForTimeout(5000); // J'attends 5 seconds
        var colorCurrent = await colorChangeButton.evaluate((el) => getComputedStyle(el).color) // Je récupère la couleur courante
        console.log('Current color text :', colorCurrent); 
        expect(colorInit).not.toBe(colorCurrent); // Verify that the color has changed       
    }

}