import { Page, expect } from '@playwright/test';

export class FillFormsPage {
    
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;
    }

    //  Méthode pour remplir un champ texte et vérifier la valeur du champs après saisie
    async fillTextField(textLocator: string = 'First Name', value: string = 'Matthieu', isComment:boolean = false) {
        let locator = this.page.getByRole('textbox', { name: textLocator })
        expect(locator).toBeEnabled() // Vérifier que le champs est modifiable
        await locator.clear() // Vider le champs avant saisie
        await locator.fill(value) // Je remplis le champ "First Name" avec la valeur de la variable "firstName"
        if (isComment) {  // Si c'est une zone de commentaire alors
            expect(await locator.inputValue()).toBe(value) // Vérifier que le champs "comments" est bien la "value"
        } else { // Sinon
            expect(locator).toHaveValue(value) // Vérifier que le champs texte contient bien la "value"
        }
    }

    //  Méthode pour modifier la sélection d'une radio sur les trois ('Male', 'Female', 'Other') et vérifier chaque valeur retournée
    async radioSelection(selected: string = 'Male') {

        console.log("Radio demandée : " + selected)
        var selectedElement = ''; var unselectedElement1 = ''; var unselectedElement2 = ''
        console.log("Avant Switch => SE : ", selectedElement, "UE1", unselectedElement1, "UE2", unselectedElement2)

        switch(selected) {
            case "Male":
                selectedElement = 'Male'
                unselectedElement1 = 'Female'
                unselectedElement2 = 'Other'
                break
            case "Female":
                selectedElement = 'Female'
                unselectedElement1 = 'Male'
                unselectedElement2 = 'Other'
                break
            case "Other":
                selectedElement = 'Other'
                unselectedElement1 = 'Female'
                unselectedElement2 = 'Male'
                break
            default:
                console.log(selected + ": Sélection non disponible !");
                console.log("SE : ", selectedElement, "UE1", unselectedElement1, "UE2", unselectedElement2);
                break
        }
        
        // Cliquer sur la radio associée et vérifier qu'elle est sélectionnée et les 2 autres non
        // await page.getByText('Male', { exact: true }).click();
        console.log("Après Switch => SE : ", selectedElement, "UE1", unselectedElement1, "UE2", unselectedElement2);
        await this.page.getByText(selectedElement, { exact: true }).click()
        expect(this.page.getByText(selectedElement, { exact: true })).toBeChecked()
        expect(this.page.getByText(unselectedElement1, { exact: true })).not.toBeChecked()
        expect(this.page.getByText(unselectedElement2, { exact: true })).not.toBeChecked()

    }

    //  Méthode pour remplir un champ date et vérifier la valeur du champs après saisie
    async fillDateField(dateOfBirth: string = "11/09/1989") {
        let locator = this.page.locator('#dateOfBirthInput')
        // await locator.clear()
        await locator.fill(dateOfBirth);
        expect(await locator.inputValue()).toBe(dateOfBirth);
    }

    //  Méthode pour remplir un champ Date ou Autocomplétion et vérifier la valeur du champs après saisie
    async fillFieldDateOrAutocompletion(textLocator: string = '#dateOfBirthInput' , value: string = "11/09/1989") {
        let locator = this.page.locator(textLocator)
        // Si le locator est associé à un champ date alors
        if (textLocator.includes('date')) {
            let locator = this.page.locator(textLocator)
            await locator.fill(value);
            expect(await locator.inputValue()).toBe(value);
        } else {
            // Je remplis le champs "Subjects" avec l'autocomplétion
            //?\\ A améliorer // => Autocompletion => récupération de la première lettre :P
            await locator.fill('a'); 
            await this.page.getByText(value, { exact: true }).click();
            //!\\ A trouver comment faire => Expect suite à un clique sur l'autocompletion.
            // expect(await locator.inputValue()).toContain(value);
        }
    }

    //  Méthode pour cliquer sur un checkbox "Sports", "Reading" et "Music" et vérifie qu'elle est cochée
    async hobbiesCheckAction(hobbieSelected: string = "Sports", check: boolean = true) {
    // let sportsCheckText = 'Sports'; let sportsLocator = page.getByText(sportsCheckText)
    // let readingCheckText = 'Reading'; let readingLocator = page.getByText(readingCheckText)
    // let musicCheckText = 'Music'; let musicLocator = page.getByText(musicCheckText)
        let locator = this.page.getByText(hobbieSelected)
        if (check) { // Si à cocher alors
            // Si non coché alors La cocher
            if (!(await locator.isChecked())) { await locator.click() }   
            expect (locator).toBeChecked() // Vérifier qu'elle est bien cochée
        } else { // Si à décocher alors
            // Si non coché alors La cocher
            if (await locator.isChecked()) { await locator.click() }
            expect (locator).not.toBeChecked() // Vérifier qu'elle est bien décochée
        }
    }
    
    //  Méthode pour sélectionne une valeur dans le sélecteur State et City
    async selectStateAndCity(state:string, city:string) {
        // Sélection dans "State"
        let stateSelectorLocator = this.page.locator('#state svg')
        await stateSelectorLocator.click();
        let stateSelectedLocator = this.page.getByText(state, { exact: true })
        await stateSelectedLocator.click()
        expect(await stateSelectedLocator).toBeVisible()
        // Sélection dans "City"
        let citySelectorLocator = this.page.locator('#city svg')
        await citySelectorLocator.click();
        let citySelectedLocator = this.page.getByText(city, { exact: true })
        await citySelectedLocator.click()
        expect(await citySelectedLocator).toBeVisible()
    }
    
    // Méthode pour soumettre le formulaire
    async submitForm() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    // Méthode pour vérifier que le résultat du formulaire est affiché
    async checkResultVisible() {
        await expect(this.page.getByText('Thanks for submitting the form')).toBeVisible();
    }
    
    // Méthode pour vérifier que les données saisies correspondent bien :) Plus tard 
    async checkResultDatas() {

        let firstName:string = 'Matthieu'
        let lastName:string = 'Degraeve'
        let eMail:string = 'matthieu.degraeve@gmail.com'
        let gender:string = "Male"
        let mobileNumber: string = '0700000000'
        let dateOfBirthText:string = "11/09/1989"
        let autocompletionText:string = "Accounting"
        let hobbiesCheckText:string = "Sports, Reading, Music"
        let currentAddress:string ='Mon adresse courante'
        let stateToSelect:string = "Haryana"
        let cityToSelect:string = "Panipat"

        await expect(this.page.getByRole('cell', { name: firstName + ' ' + lastName })).toBeVisible()
        await expect(this.page.getByRole('cell', { name: eMail })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: gender })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: mobileNumber })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: autocompletionText })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: hobbiesCheckText })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: currentAddress })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: stateToSelect + ' ' + cityToSelect})).toBeVisible();

        // plus tard : car il faut transformer "dd/mm/yyyy" en "dd mmmm aaaa" (et je ne sais pas encore le faire :P)
        // await expect(this.page.getByRole('cell', { name: dateOfBirthText }).toBeVisible();
    }
    
}
