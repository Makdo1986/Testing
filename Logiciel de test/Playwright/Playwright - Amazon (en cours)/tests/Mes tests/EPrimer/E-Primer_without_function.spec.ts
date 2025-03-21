import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://exploratorytestingacademy.com/app/');
  });

test('EPrime - Correct Text', async ({ page }) => {
    
    const textToCheck = 'I worked as an engineer, i have a cat and a dog. I feel joy today.' 
    const textbox = page.getByRole('textbox', { name: 'Text:' })
    const checkButton = page.getByRole('button', { name: 'Check For E-Prime' })
    const result = page.locator('#eprimeoutput')

    const countWord = page.locator('#wordCount')
    const countDiscourage = page.locator('#discouragedWordCount')
    const countViolation = page.locator('#possibleViolationCount')

    const exceptCountWord = 16
    const exceptDiscourage = 0
    const exceptViolation = 0
    
    await textbox.click() // Je clique dans le input pour saisir son texte à vérifier
    await textbox.fill(textToCheck) // Je le renseigne
    
    if (await checkButton.isVisible()) {console.log('Le bouton "check" est visible')} else {console.log('Le bouton "check" est invisible')}
    console.log('Bouton Check', 'visible => ', await checkButton.isVisible()) // J'affiche 
    console.log('Bouton Check', 'disponible => ', await checkButton.isEnabled())
    await checkButton.click()

    console.log('Nombre de mots : ' + await countWord.textContent())
    console.log('Nombre de discouraged : ' + await countDiscourage.textContent())
    console.log('Nombre de violation : ' + await countViolation.textContent())
    await expect(countWord).toHaveText(String(exceptCountWord))
    await expect(countDiscourage).toHaveText(String(exceptDiscourage))
    await expect(countViolation).toHaveText(String(exceptViolation))

    expect(result).toBeVisible
    expect(result).not.toBeEditable
    expect(result).toContainText(textToCheck)

});

test('EPrime - Wrong Text (Discouraged)', async ({ page }) => {

    const textToCheck = 'I am Matthieu Degraeve, i am 38 years old, i come from boston texas' 
    const textbox = page.getByRole('textbox', { name: 'Text:' })
    const checkButton = page.getByRole('button', { name: 'Check For E-Prime' })
    const result = page.locator('#eprimeoutput')

    const countWord = page.locator('#wordCount')
    const countDiscourage = page.locator('#discouragedWordCount')
    const countViolation = page.locator('#possibleViolationCount')

    const exceptCountWord = 14
    const exceptDiscourage = 2
    const exceptViolation = 0
    
    await textbox.click() // Je clique dans le input pour saisir son texte à vérifier
    await textbox.fill(textToCheck) // Je le renseigne
    
    if (await checkButton.isVisible()) {console.log('Le bouton "check" est visible')} else {console.log('Le bouton "check" est invisible')}
    console.log('Bouton Check', 'visible => ', await checkButton.isVisible()) // J'affiche 
    console.log('Bouton Check', 'disponible => ', await checkButton.isEnabled())
    await checkButton.click()

    console.log('Nombre de mots : ' + await countWord.textContent())
    console.log('Nombre de discouraged : ' + await countDiscourage.textContent())
    console.log('Nombre de violation : ' + await countViolation.textContent())
    await expect(countWord).toHaveText(String(exceptCountWord))
    await expect(countDiscourage).toHaveText(String(exceptDiscourage))
    await expect(countViolation).toHaveText(String(exceptViolation))

    expect(result).toBeVisible
    expect(result).not.toBeEditable
    expect(result).toContainText(textToCheck)

});


test('EPrime - Wrong Text (Violation)', async ({ page }) => {

    const textToCheck = 'It\'s mine' 
    const textbox = page.getByRole('textbox', { name: 'Text:' })
    const checkButton = page.getByRole('button', { name: 'Check For E-Prime' })
    const result = page.locator('#eprimeoutput')

    const countWord = page.locator('#wordCount')
    const countDiscourage = page.locator('#discouragedWordCount')
    const countViolation = page.locator('#possibleViolationCount')

    const exceptCountWord = 2
    const exceptDiscourage = 0
    const exceptViolation = 1 
    
    await textbox.click() // Je clique dans le input pour saisir son texte à vérifier
    await textbox.fill(textToCheck) // Je le renseigne
    
    if (await checkButton.isVisible()) {console.log('Le bouton "check" est visible')} else {console.log('Le bouton "check" est invisible')}
    console.log('Bouton Check', 'visible => ', await checkButton.isVisible()) // J'affiche 
    console.log('Bouton Check', 'disponible => ', await checkButton.isEnabled())
    await checkButton.click()

    // console.log('Nombre de mots : ' + await countWord.textContent())
    // console.log('Nombre de discouraged : ' + await countDiscourage.textContent())
    // console.log('Nombre de violation : ' + await countViolation.textContent())
    await expect(countWord).toHaveText(String(exceptCountWord))
    await expect(countDiscourage).toHaveText(String(exceptDiscourage))
    await expect(countViolation).toHaveText(String(exceptViolation))

    expect(result).toBeVisible
    expect(result).not.toBeEditable
    expect(result).toContainText(textToCheck)

})