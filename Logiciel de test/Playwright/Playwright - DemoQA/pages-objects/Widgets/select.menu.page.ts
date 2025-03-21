import { Page, expect } from '@playwright/test';

export class SelectMenuPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    //  Méthode pour utiliser les sélecteurs
    async actionSelects() {
        
        // Je selectionne les valeurs suivantes : 

        // Select value > another root option
        await this.page.locator('#withOptGroup svg').click();
        await this.page.getByText('Another root option', { exact: true }).click();

        // Select one > other
        await this.page.locator('#selectOne svg').click();
        await this.page.getByText('Other', { exact: true }).click()

        // Old Style menu >  Aqua
        // Valeur initiale : Red, je le vérifie
        expect(await this.page.locator('#oldSelectMenu').inputValue()).toBe('red');
        // Je sélectionne 'Aqua', je vérifie après sélection
        await this.page.locator('#oldSelectMenu').selectOption('Aqua') // Sélection avec l'option 'Aqua'
        await this.page.locator('#oldSelectMenu').selectOption('10'); // Sélection avec l'index associé 10
        expect(await this.page.locator('#oldSelectMenu').inputValue()).toBe('10'); // Vérifie que la valeur sélectionnée est 'aqua'

        // Drop down > toutes les couleurs 
        await this.page.locator('#selectMenuContainer svg').nth(2).click()
        await this.page.locator('#react-select-4-option-0').click()
        await this.page.locator('#react-select-4-option-1').click()
        await this.page.locator('#react-select-4-option-2').click()
        await this.page.locator('#react-select-4-option-3').click()
        await expect(this.page.getByText('No options')).toBeVisible()
        await this.page.getByText('GreenBlueBlackRed').click()
        await expect(this.page.getByText('No options')).not.toBeVisible()

        // Multi select > Audi
        await this.page.locator('#cars').selectOption('audi');
        expect(await this.page.locator('#cars').inputValue()).toBe('audi');
            
    }

}