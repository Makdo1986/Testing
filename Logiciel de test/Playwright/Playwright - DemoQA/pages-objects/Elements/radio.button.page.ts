import { Page, expect } from '@playwright/test';

export class RadioButtonPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    //  Méthode pour remplir un champ texte et vérifier la valeur du champs après saisie
    async choiceRadioAndCheck(choiceRadio: string) {
        
        var choiceYesOrImpressive:Boolean = false // Permet d'indiquer si on a choisi 'Yes' ou 'Impressive' (initialisation)
        // (car pas trouvé comment faire un condition "and" ou "or" en typescript :/)

        switch (choiceRadio) { // En fonction de "choiceRadio"
            case 'Yes': // Si 'yes' alors
                choiceYesOrImpressive = true // on passe à true
                break
            case 'Impressive': // Si 'Impressive' alors
                choiceYesOrImpressive = true // on passe à true
                break
            case 'No': // Si 'No" alors
                choiceYesOrImpressive = false // on passe à false
                break
            default: // Sinon on indique que le choix n'est pas disponible...
                console.log(choiceRadio + " : Non disponible")
                break
        }

        // Récupération du locator associé en fonction de'choiceRadio'
        var radioLocator = this.page.locator('label').filter({ hasText: choiceRadio });

        if (choiceYesOrImpressive) { // Si 'Yes' ou 'Impressive' alors
            await expect(radioLocator).not.toBeChecked() // vérifier que la radio n'est pas sélectionnée
            await radioLocator.click() // cliquer sur l'élément radio
            await expect(radioLocator).toBeChecked() // vérifier que la radio est sélectionnée
            await expect(this.page.getByText('You have selected ' + choiceRadio)).toBeVisible() // vérifier que le texte affiché est visible
        } else { // Sinon
            await expect(radioLocator).toBeDisabled() // Vérifier que la radio "No" est désactivée
        }

    }

}