import { test } from '@playwright/test';

import { LandingPage } from '../pages-objects/Landing page/landing.page'
import { MenuSection } from '../pages-objects/Landing page/menu.section'

import { LinksPage } from '../pages-objects/Elements/links.page'
import { RadioButtonPage } from '../pages-objects/Elements/radio.button.page'
import { DynamicPropertiesPage } from '../pages-objects/Elements/dynamic.properties.page'

import { FillFormsPage } from '../pages-objects/Forms/fill.form.page'

import { ToolTipsPage } from '../pages-objects/Widgets/tool.tips'
import { SelectMenuPage } from '../pages-objects/Widgets/select.menu.page'

import { BookStoreApplicationPage } from '../pages-objects/Book store application/book.store.application.page'
import { RegisterPage } from '../pages-objects/Book store application/register.page'

// Avant chaque test, je vais sur le site internet
test.beforeEach(async ({ page }) => {
    const landingPage = new LandingPage(page) // Je me rends sur le site web demoqa.com    
    await landingPage.navigateToWebsite()
})


test('01 - POM - Elements > Links : Check API response.', async ({ page }) => {
    
    const landingPage = new LandingPage(page)
    const menuSection = new MenuSection(page)
    const linksPage = new LinksPage(page)

    let menuName = "Elements"
    let subMenuName = "Links"
    
    // Menu : 
    // Remplir le formulaire
    await landingPage.goToMenu(menuName)
    await menuSection.checkOnMenuSection()
    await menuSection.goToSubMenu(subMenuName)

    // Améliorer en faisant un boucle sur une dico :)

    await linksPage.clickOnLinkTextAndCheckResponseCodeAndText("Created", "201")
    await linksPage.clickOnLinkTextAndCheckResponseCodeAndText("No Content", "204")
    await linksPage.clickOnLinkTextAndCheckResponseCodeAndText("Moved", "301")
    await linksPage.clickOnLinkTextAndCheckResponseCodeAndText("Bad Request", "400")
    await linksPage.clickOnLinkTextAndCheckResponseCodeAndText("Unauthorized", "401")
    await linksPage.clickOnLinkTextAndCheckResponseCodeAndText("Forbidden", "403")
    await linksPage.clickOnLinkTextAndCheckResponseCodeAndText("Not Found", "404")

    console.log('01 - POM - Elements > Links : Check API response => OK')

})

test('02 - POM - Forms > Fill form : Submit <=> Check Datas', async ({ page }) => {

    const landingPage = new LandingPage(page)
    const menuSection = new MenuSection(page)
    const fillFormsPage = new FillFormsPage(page)

    let menuName = "Forms"
    let subMenuName = "Practice Form"
    
    // Menu : 
    // Remplir le formulaire
    await landingPage.goToMenu(menuName)
    await menuSection.checkOnMenuSection()
    await menuSection.goToSubMenu(subMenuName)
    
    // Je remplis le formulaire : Prénom, Nom, Mail
    await fillFormsPage.fillTextField('First Name', 'Matthieu')
    await fillFormsPage.fillTextField('Last Name', 'Degraeve')
    await fillFormsPage.fillTextField('name@example.com', 'matthieu.degraeve@gmail.com')

    // Je clique sur les différentes radios et vérifie qu'elle est sélectionnée et les 2 autres non    
    await fillFormsPage.radioSelection('Female')
    await fillFormsPage.radioSelection('Other')
    await fillFormsPage.radioSelection('Male')

    // Je remplis le champ "Mobile Number"
    await fillFormsPage.fillTextField('Mobile Number', '0700000000')
    
    // Je saisie une date de naissance
    //await fillFormsPage.fillDateField("11/09/1989")
    await fillFormsPage.fillFieldDateOrAutocompletion('#dateOfBirthInput', "11/09/1989")
    
    // Je remplis le champs "Subjects" avec l'autocomplétion
    await fillFormsPage.fillFieldDateOrAutocompletion('#subjectsInput', "Accounting")

    // Je clique sur les checkboxes "Sports", "Reading" et "Music" et vérifie qu'elles sont cochées
    await fillFormsPage.hobbiesCheckAction("Sports", false) // Décocher alors que déjà décoché
    await fillFormsPage.hobbiesCheckAction("Sports", true) // Cocher alors que décoché
    await fillFormsPage.hobbiesCheckAction("Sports", false) // Décocher alors que coché
    await fillFormsPage.hobbiesCheckAction("Sports", true) // Cocher alors que décoché
    await fillFormsPage.hobbiesCheckAction("Reading", true) // Cocher alors que décoché
    await fillFormsPage.hobbiesCheckAction("Music", true) // Cocher alors que décoché
    
    // Je remplis le champ "Current Address"
    await fillFormsPage.fillTextField('Current Address', 'Mon adresse courante', true)
    
    // Je sélectionne :
    // - la valeur "Haryana" dans le select "State"
    // - la valeur "Panipat" dans le select "City"
    await fillFormsPage.selectStateAndCity("Haryana", "Panipat")
    
    // Je clique sur le bouton "Submit"
    await fillFormsPage.submitForm()

    console.log('02 - POM - Forms > Fill form : Submit <=> Check Datas => OK')
}) 

test('03 - POM - Widget > Tool tips : Check hovers', async ({ page }) => {

    const landingPage = new LandingPage(page)
    const menuSection = new MenuSection(page)
    const toolTipsPage = new ToolTipsPage(page)

    let menuName = 'Widgets'
    let subMenuName = 'Tool Tips'
    
    // Menu : 
    // Remplir le formulaire
    await landingPage.goToMenu(menuName)
    await menuSection.checkOnMenuSection()
    await menuSection.goToSubMenu(subMenuName)

    await toolTipsPage.hoverElement('button', 'Button') // hover : Button
    await toolTipsPage.hoverElement('textbox', 'text field') // hover : textbox
    await toolTipsPage.hoverElement('link', 'Contrary') // hover : link
    await toolTipsPage.hoverElement('link', '1.10.32') // hover : link
    
    console.log('03 - POM - Widget > Tool tips : Check hovers => OK')
}) 

test('04 - POM - Widget > Select menu : Select value', async ({ page }) => {
    
    const landingPage = new LandingPage(page)
    const menuSection = new MenuSection(page)
    const selectMenuPage = new SelectMenuPage(page)

    let menuName = "Widgets"
    let subMenuName = "Select menu"
    
    // Menu : 
    // Remplir le formulaire
    await landingPage.goToMenu(menuName)
    await menuSection.checkOnMenuSection()
    await menuSection.goToSubMenu(subMenuName)

    /**
     * Je sélectionne les valeurs suivantes : 
     * Select value > another root option
     * Select one > other
     * Old Style menu >  Aqua
     * Drop down > toutes les couleurs 
     * Multi select > Audi
     */
    await selectMenuPage.actionSelects()

    console.log('04 - POM - Widget > Select menu : Select value => OK')
}) 

test('05 - POM - Elements > Radio button : check and except', async ({ page }) => {
    
    const landingPage = new LandingPage(page)
    const menuSection = new MenuSection(page)
    const radioButtonPage = new RadioButtonPage(page)

    let menuName = "Elements"
    let subMenuName = "Radio Button"
    
    // Menu : 
    // Remplir le formulaire
    await landingPage.goToMenu(menuName)
    await menuSection.checkOnMenuSection()
    await menuSection.goToSubMenu(subMenuName)

    // var choiceRadio = 'Yes'
    await radioButtonPage.choiceRadioAndCheck('Yes')
    // choiceRadio = 'Impressive'
    await radioButtonPage.choiceRadioAndCheck('Impressive')
    // choiceRadio = 'No'
    await radioButtonPage.choiceRadioAndCheck('No')

    console.log('05 - POM - Elements > Radio button : check and except => OK')

})

test('06 - POM - Elements > Dynamic properties : Change color and check', async ({ page }) => {
    
    const landingPage = new LandingPage(page)
    const menuSection = new MenuSection(page)
    const dynamicPropertiesPage = new DynamicPropertiesPage(page)

    let menuName = 'Elements'
    let subMenuName = 'Dynamic Properties'
    
    // Menu : 
    // Remplir le formulaire
    await landingPage.goToMenu(menuName)
    await menuSection.checkOnMenuSection()
    await menuSection.goToSubMenu(subMenuName)
    
    // Je vérifie que la couleur de texte change au bout de 5 secondes    
    await dynamicPropertiesPage.checkChangeColorText()

    console.log('06 - POM - Elements > Dynamic properties : Change color and check => OK')

})

test('07 - POM - Book store application > Profile : register > create > login', async ({ page }) => {
    
    const landingPage = new LandingPage(page)
    const menuSection = new MenuSection(page)
    const bookStoreApplicationPage = new BookStoreApplicationPage(page)
    const registerPage = new RegisterPage(page)

    let menuName = 'Book store application'
    let subMenuName = 'Profile'
    
    // Menu : 
    // Remplir le formulaire
    await landingPage.goToMenu(menuName)
    await menuSection.checkOnMenuSection()
    await menuSection.goToSubMenu(subMenuName)

    // Créer un user et s'assurer qu'il soit créer
    await bookStoreApplicationPage.checkNotLoggedVisible() // Vérifier que la page indique "Currently not logged"
    await bookStoreApplicationPage.clickRegisterLink()

    await registerPage.checkRegisterVisible() // Vérifier que la page est celle "Register"
    await registerPage.fillFormRegister('First Name', 'Matthieu')
    await registerPage.fillFormRegister('Last Name', 'Degraeve')
    await registerPage.fillFormRegister('UserName', 'Makdo')
    await registerPage.fillFormRegister('Password', 'Azerty@425')
    
    await registerPage.submitFormRegister()
    
    console.log('07 - POM - Book store application > Profile : register > /!\\/!\\/!\\ create > login /!\\/!\\/!\\ => OK')

})  