import { test, Page, expect } from '@playwright/test';

// Définition de la fonction de test réutilisable
async function checkEPrimeText(
    page: Page, 
    textToCheck: string, 
    exceptCountWord: number, 
    exceptDiscourage: number, 
    exceptViolation: number
) {
    
    const textbox = page.getByRole('textbox', { name: 'Text:' });
    const checkButton = page.getByRole('button', { name: 'Check For E-Prime' });
    const result = page.locator('#eprimeoutput');

    const countWord = page.locator('#wordCount');
    const countDiscourage = page.locator('#discouragedWordCount');
    const countViolation = page.locator('#possibleViolationCount');

    await page.goto('https://exploratorytestingacademy.com/app/');

    // Remplissage du champ texte
    await textbox.click();
    await textbox.fill(textToCheck);

    // Vérification de la visibilité et disponibilité du bouton
    const isCheckButtonVisible = await checkButton.isVisible();
    console.log('Bouton Check', 'visible =>', isCheckButtonVisible);
    console.log('Bouton Check', 'disponible =>', await checkButton.isEnabled());

    if (isCheckButtonVisible) {
        await checkButton.click();
    } else {
        console.error('Erreur: Le bouton "Check For E-Prime" est invisible');
        return; // On arrête l'exécution si le bouton est invisible
    }

    // Vérification des valeurs attendues
    console.log('Nombre de mots :', await countWord.textContent());
    console.log('Nombre de discouraged :', await countDiscourage.textContent());
    console.log('Nombre de violation :', await countViolation.textContent());

    await expect(countWord).toHaveText(String(exceptCountWord));
    await expect(countDiscourage).toHaveText(String(exceptDiscourage));
    await expect(countViolation).toHaveText(String(exceptViolation));

    // Vérifications du résultat
    expect(result).toBeVisible();
    await expect(result).not.toBeEditable();
    await expect(result).toContainText(textToCheck);
}

// Utilisation de la fonction dan s un test
test('EPrime - Wrong Text (Violation)', async ({ page }) => { 
    await checkEPrimeText(page, "It's mine", 2, 0, 1);
});

// Autres exemples d'utilisation avec d'autres textes
test('EPrime - Correct Text', async ({ page }) => { 
    await checkEPrimeText(page, "I own this", 3, 0, 0);
});