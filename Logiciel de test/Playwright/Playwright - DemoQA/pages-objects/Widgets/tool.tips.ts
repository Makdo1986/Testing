import { Page, expect } from '@playwright/test';

export class ToolTipsPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    //  Méthode pour remplir un champ texte et vérifier la valeur du champs après saisie
    async hoverElement(typeRole = 'button', elementName: string = 'Hover me to see') {
        switch (typeRole) {
            case 'button': // hover : Button
                await this.page.getByRole('button', { name: 'Hover me to see' }).hover();
                break
            case 'textbox': // hover : textbox
                await this.page.getByRole('textbox', { name: 'Hover me to see' }).hover();
                break
            case 'link': // hover : Button
                await this.page.getByRole('link', { name: elementName }).hover();
                break
            default: // type non disponible
                console.log(typeRole + ": Non disponible !");
                break
        }

        // Vérifier que le hover affiche le bon text associé
        await expect(this.page.getByText('You hovered over the ' + elementName)).toBeVisible()
        
    }

}