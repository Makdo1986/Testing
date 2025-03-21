import { test, expect } from '@playwright/test';

// TP 1 : Playwright

// DemoQa.com

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/'); // Je me rends sur le site web demoqa.com
})

test('01 - Elements > Links : Check API response.', async ({ page }) => {

    // Menu "Elements" :
    // Sous menu "Link" : 
    // Following links will send an api call > Vérifier tout les retours de message . 
    // Exemple : je clique sur created , j'ai le message "Link has responded with staus 201 and status text Created"

    await page.getByRole('heading', { name: 'Elements' }).click(); // Je clique sur le menu "Forms"
    await page.getByText('Links', { exact: true }).click(); // Je clique sur le sous menu "Links"
    expect(page.getByRole('heading', { name: 'Links', exact: true })).toBeVisible(); // Je vérifie que le titre "Practice Form" est visible
                
    // Link : Created

    var linkText = 'Created'; // Je définis le texte du lien
    var linkCode = 201; // Je définis le code de retour attendu

    await page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
    await expect(
        page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
    ).toBeVisible() // Je vérifie que le message est visible

    // Link : No Content

    var linkText = 'No Content' // Je définis le texte du lien
    var linkCode = 204; // Je définis le code de retour attendu

    await page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
    await expect(
        await page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
    ).toBeVisible() // Je vérifie que le message est visible
    
    // Link : Moved

    var linkText = 'Moved' // Je définis le texte du lien
    var linkCode = 301; // Je définis le code de retour attendu

    await page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
    await expect(
        await page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
    ).toBeVisible() // Je vérifie que le message est visible

    // Link : Bad Request

    var linkText = 'Bad Request' // Je définis le texte du lien
    var linkCode = 400; // Je définis le code de retour attendu

    await page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
    await expect(
        await page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
    ).toBeVisible() // Je vérifie que le message est visible

    // Link : Unauthorized

    var linkText = 'Unauthorized' // Je définis le texte du lien
    var linkCode = 401; // Je définis le code de retour attendu

    await page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
    await expect(
        await page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
    ).toBeVisible() // Je vérifie que le message est visible

    // Link : Forbidden

    var linkText = 'Forbidden' // Je définis le texte du lien
    var linkCode = 403; // Je définis le code de retour attendu

    await page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
    await expect(
        await page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
    ).toBeVisible() // Je vérifie que le message est visible

    // Link : Not Found

    var linkText = 'Not Found' // Je définis le texte du lien
    var linkCode = 404; // Je définis le code de retour attendu

    await page.getByRole('link', { name: linkText }).click(); // Je clique sur le lien
    await expect(
        await page.getByText('Link has responded with staus ' + linkCode + ' and status text ' + linkText)
    ).toBeVisible() // Je vérifie que le message est visible

}) // POM OK

test('02 - Forms > Fill form : Submit <=> Check Datas', async ({ page }) => {

    // Menu "Forms" : 
    // Remplir le formulaire
    
    await page.getByRole('heading', { name: 'Forms' }).click(); // Je clique sur le menu "Forms"
    await page.getByText('Practice Form').click(); // Je clique sur le sous menu "Practice Form"
    expect(page.getByRole('heading', { name: 'Practice Form' })).toBeVisible(); // Je vérifie que le titre "Practice Form" est visible


    // Je remplis le formulaire : Prénom, Nom, Mail
    let firstName = 'Matthieu'; let lastName = 'Degraeve'; let mail = 'matthieu.degraeve@gmail.com'

    await page.getByRole('textbox', { name: 'First Name' }).fill(firstName); // Je remplis le champ "First Name" avec la valeur de la variable "firstName"
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName); // Je remplis le champ "Last Name" avec la valeur de la variable "lastName"
    await page.getByRole('textbox', { name: 'name@example.com' }).fill(mail); // Je remplis le champ "Email" avec la valeur de la variable "mail"

    // Je clique sur la radio "Female" et vérifie qu'il est sélectionné et les 2 autres non
    // await page.getByText('Male', { exact: true }).click();
    var selectedElement = 'Female'; var unselectedElement1 = 'Male'; var unselectedElement2 = 'Other'
    await page.getByText(selectedElement).click()
    expect(page.getByText(selectedElement, { exact: true })).toBeChecked()
    expect(page.getByText(unselectedElement1, { exact: true })).not.toBeChecked()
    expect(page.getByText(unselectedElement2, { exact: true })).not.toBeChecked()

    var selectedElement = 'Other'; var unselectedElement1 = 'Female'; var unselectedElement2 = 'Male'
    await page.getByText(selectedElement, { exact: true }).click()
    expect(page.getByText(selectedElement, { exact: true })).toBeChecked()
    expect(page.getByText(unselectedElement1, { exact: true })).not.toBeChecked()
    expect(page.getByText(unselectedElement2, { exact: true })).not.toBeChecked()
    
    var selectedElement = 'Male'; var unselectedElement1 = 'Female'; var unselectedElement2 = 'Other'
    await page.getByText(selectedElement, { exact: true }).click()
    expect(page.getByText(selectedElement, { exact: true })).toBeChecked()
    expect(page.getByText(unselectedElement1, { exact: true })).not.toBeChecked()
    expect(page.getByText(unselectedElement2, { exact: true })).not.toBeChecked()
    
    // Je remplis le champ "Mobile Number"
    let mobileNumber = '0700000000'
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobileNumber);

    // Je saisie une date de naissance
    let dateOfBirth = "11/09/1989";
    let dobLocator = page.locator('#dateOfBirthInput');
    await dobLocator.fill(dateOfBirth);
    expect(await dobLocator.inputValue()).toBe(dateOfBirth);

    // Je remplis le champs "Subjects" avec l'autocomplétion
    let autocompletionText = 'Accounting'
    await page.locator('#subjectsInput').fill('a');
    await page.getByText(autocompletionText, { exact: true }).click();

    // Je clique sur les checkboxes "Sports", "Reading" et "Music" et vérifie qu'elles sont cochées
    let sportsCheckText = 'Sports'; let sportsLocator = page.getByText(sportsCheckText)
    let readingCheckText = 'Reading'; let readingLocator = page.getByText(readingCheckText)
    let musicCheckText = 'Music'; let musicLocator = page.getByText(musicCheckText)
    
    expect (sportsLocator).not.toBeChecked()
    await sportsLocator.click();
    expect (sportsLocator).toBeChecked()

    expect (readingLocator).not.toBeChecked()
    await readingLocator.click();
    expect (readingLocator).toBeChecked()
    
    expect (musicLocator).not.toBeChecked()
    await musicLocator.click();
    expect (musicLocator).toBeChecked()
    
    // Je remplis le champ "Current Address"
    let addressCurrent = 'Mon adresse courante'
    await page.getByRole('textbox', { name: 'Current Address' }).fill(addressCurrent);
    expect(await page.getByRole('textbox', { name: 'Current Address' }).inputValue()).toBe(addressCurrent);

    // Je sélectionne la valeur "Haryana" dans le select "State"
    let stateValue = 'Haryana'
    await page.locator('#state svg').click();
    await page.getByText(stateValue, { exact: true }).click();

    // Je sélectionne la valeur "Panipat" dans le select "City"
    let cityValue = 'Panipat'
    await page.locator('#city svg').click();
    await page.getByText(cityValue, { exact: true }).click();

    // Je clique sur le bouton "Submit"
    await page.getByRole('button', { name: 'Submit' }).click();

    // Je vérifie que le message "Thanks for submitting the form" est visible
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

    // Je vérifie que les données saisies correspondent bien :) Plus tard 

    expect(page.getByRole('cell', { name: firstName + ' ' + lastName })).toBeVisible()
    await page.getByRole('cell', { name: mail }).click();
    await page.getByRole('cell', { name: selectedElement }).click();
    await page.getByRole('cell', { name: mobileNumber }).click();
    await page.getByRole('cell', { name: autocompletionText }).click();
    await page.getByRole('cell', { name: sportsCheckText + ', ' + readingCheckText + ', ' + musicCheckText }).click();
    await page.getByRole('cell', { name: addressCurrent }).click();
    await page.getByRole('cell', { name: 'Haryana Panipat' }).click();
    
    // plus tard :  await page.getByRole('cell', { name: 'June,1986' }).click();

}) // POM En cours

test('03 - Widget > Tool tips : Check hovers', async ({ page }) => {

    // Menu "Widgets" :
    // Tool tips > Vérifier les hover
    
    // Je clique sur le menu 'Widgets'
    await page.getByRole('heading', { name: 'Widgets' }).click();
    // Je clique sur le sous-menu 'Tool Tips' et je vérifie que je suis bien sur cette page
    await page.getByText('Tool Tips').click()
    await expect(page.getByRole('heading', { name: 'Tool Tips' })).toBeVisible()

    // J'hover tous les éléments possibles et je vérifie que le hoover associé est bien visible
    // hover : Button
    await page.getByRole('button', { name: 'Hover me to see' }).hover()
    await expect(page.getByText('You hovered over the Button')).toBeVisible()
    // hover : textbox
    await page.getByRole('textbox', { name: 'Hover me to see' }).hover()
    await expect(page.getByText('You hovered over the text')).toBeVisible()
    // hover : link
    await page.getByRole('link', { name: 'Contrary' }).hover();
    await expect(page.getByText('You hovered over the Contrary')).toBeVisible()
    // hover : link
    await page.getByRole('link', { name: '1.10.32' }).hover();
    await expect(page.getByText('You hovered over the 1.10.32')).toBeVisible()
 
})

test('04 - Widget > Select menu : Select value', async ({ page }) => {
    
    // Toujours sur le menu "Widgets" : 
    // Sous menu "Select menu" : 
    
    // Je selectionne les valeurs suivantes : 
    
    // Select value > another root option
    // Select one > other
    // Old Style menu >  Aqua
    // Drop down > toutes les couleurs 
    // Multi select > Audi

    // Je clique sur le menu 'Widgets'
    await page.getByRole('heading', { name: 'Widgets' }).click();
    // Je clique sur le sous-menu 'Select Menu' et je vérifie que je suis bien sur cette page
    await page.getByText('Select Menu').click()
    await expect(page.getByRole('heading', { name: 'Select Menu' })).toBeVisible()

    // Je selectionne les valeurs suivantes : 

    // Select value > another root option
    await page.locator('#withOptGroup svg').click();
    await page.getByText('Another root option', { exact: true }).click();

    // Select one > other

    await page.locator('#selectOne svg').click();
    await page.getByText('Other', { exact: true }).click()

    // Old Style menu >  Aqua
    // Valeur initiale : Red, je le vérifie
    expect(await page.locator('#oldSelectMenu').inputValue()).toBe('red');
    // Je sélectionne 'Aqua', je vérifie après sélection
    await page.locator('#oldSelectMenu').selectOption('Aqua') // Sélection avec l'option 'Aqua'
    await page.locator('#oldSelectMenu').selectOption('10'); // Sélection avec l'index associé 10
    expect(await page.locator('#oldSelectMenu').inputValue()).toBe('10'); // Vérifie que la valeur sélectionnée est 'aqua'

    // Drop down > toutes les couleurs 
    await page.locator('#selectMenuContainer svg').nth(2).click()
    await page.locator('#react-select-4-option-0').click()
    await page.locator('#react-select-4-option-1').click()
    await page.locator('#react-select-4-option-2').click()
    await page.locator('#react-select-4-option-3').click()
    await expect(page.getByText('No options')).toBeVisible()
    await page.getByText('GreenBlueBlackRed').click()
    await expect(page.getByText('No options')).not.toBeVisible()

    // Multi select > Audi
    await page.locator('#cars').selectOption('audi');
    expect(await page.locator('#cars').inputValue()).toBe('audi');

})

test('05 - Elements > Radio button : check and except', async ({ page }) => {
    
    // Menu "Elements" :
    // Sous menu "Radio button" : 
    // Cliquer sur tout les boutons et vérifications des messages

    await page.getByRole('heading', { name: 'Elements' }).click() // Je clique sur le menu
    await page.getByText('Radio button').click() // Je clique sur le sous menu 
    expect(page.getByRole('heading', { name: 'Radio button' })).toBeVisible() // Je vérifie que le titre est visible

    var choiceRadio = 'Yes'
    var radioLocator = page.locator('label').filter({ hasText: choiceRadio });
    var textLocator = page.getByText('You have selected ' + choiceRadio)
    await expect(radioLocator).not.toBeChecked()
    await radioLocator.click()
    await expect(radioLocator).toBeChecked()
    await expect(textLocator).toBeVisible()

    choiceRadio = 'Impressive'
    radioLocator = page.locator('label').filter({ hasText: choiceRadio });
    textLocator = page.getByText('You have selected ' + choiceRadio)
    await expect(radioLocator).not.toBeChecked()
    await radioLocator.click()
    await expect(radioLocator).toBeChecked()
    await expect(textLocator).toBeVisible()
    
    choiceRadio = 'No'
    radioLocator = page.locator('label').filter({ hasText: choiceRadio });
    await expect(radioLocator).toBeDisabled()

})

test('06 - Elements > Dynamic properties : Change color and check', async ({ page }) => {
    
    // Menu "Elements" :
    // Sous menu "Dynamic properties" : 
    // Je selectionne Color change et vérifie le changement de couleur

    await page.getByRole('heading', { name: 'Elements' }).click() // Je clique sur le menu
    await page.getByText('Dynamic Properties').click() // Je clique sur le sous menu 
    expect(page.getByRole('heading', { name: 'Dynamic Properties' })).toBeVisible() // Je vérifie que le titre est visible
    
    // Je selectionne Color change et vérifie le changement de couleur
    var colorChangeButton = await page.getByRole('button', { name: 'Color Change' });
    var colorInit = await colorChangeButton.evaluate((el) => getComputedStyle(el).color); // Je récupère la couleur initiale
    await page.waitForTimeout(5000); // J'attends 5 seconds
    var colorCurrent = await colorChangeButton.evaluate((el) => getComputedStyle(el).color); // Je récupère la couleur courante
    console.log('Initial color:', colorInit, 'Current color:', colorCurrent); // !!! Je ne sais pas comment le voir ... Oo ... !!!
    expect(colorInit).not.toBe(colorCurrent); // Verify that the color has changed

})

test('07 - Book store application > Profile : register > create > login', async ({ page }) => {
    
    // Menu "Book store application" :
    // Sous menu "Profile" : 
    // Créer un user et s'assurer qu'il soit créer

    await page.getByRole('heading', { name: 'Book store application' }).click() // Je clique sur le menu
    await page.getByText('Profile').click() // Je clique sur le sous menu 

    var registerLocator = page.getByRole('link', { name: 'register' }) // Je variabilise le lien "Register"
    await expect(registerLocator).toBeVisible() // Je vérifie qu'il est bien visible
    await registerLocator.click() // Puis je clique dessus.
    expect(page.getByRole('heading', { name: 'Register', exact: true })).toBeVisible() // Je vérifie que le titre est visible

    // Créer un user et s'assurer qu'il soit créer
    await page.getByRole('textbox', { name: 'First Name' }).fill('Matthieu')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Degraeve')
    await page.getByRole('textbox', { name: 'UserName' }).fill('Makdo')
    await page.getByRole('textbox', { name: 'Password' }).fill('Azerty@425')

    await page.getByRole('button', { name: 'Register' }).click()

})  