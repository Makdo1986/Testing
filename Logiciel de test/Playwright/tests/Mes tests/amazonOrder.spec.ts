import { test, expect, type Page, chromium } from '@playwright/test';

let page: Page;
let browser;

test.beforeAll(async () => {
  // Lancer le navigateur Chromium
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

test.afterAll(async () => {
  // Fermer le navigateur après le test
  await browser.close();
});

test('devrait commander des baskets avec succès', async () => {
  // 1. Aller sur Amazon.fr
  await page.goto('https://www.amazon.fr');

  // 2. Rechercher des baskets
  await page.fill('input[name="field-keywords"]', 'baskets');
  await page.click('input[type="submit"][aria-label="Rechercher"]');
  await page.waitForTimeout(3000); // Attendre que les résultats se chargent

  // 3. Cliquer sur le premier produit de la liste
  await page.click('.s-main-slot .s-result-item:first-child a');

  // 4. Vérifier que la page produit s'affiche
  await page.waitForSelector('#productTitle');
  const productTitle = await page.innerText('#productTitle');
  console.log(`Produit sélectionné: ${productTitle}`);

  // 5. Ajouter au panier
  await page.click('#add-to-cart-button');
  await page.waitForTimeout(2000); // Attendre que l'ajout au panier soit pris en compte

  // 6. Aller au panier
  await page.click('a#nav-cart');
  await page.waitForSelector('.sc-list-item-content');

  // 7. Vérifier que l'article est dans le panier
  const cartItemText = await page.innerText('.sc-list-item-content');
  console.log(`Article dans le panier: ${cartItemText}`);

  // 8. Vérification de la présence de l'article dans le panier
  expect(cartItemText).toContain('baskets'); // Vérifier que le mot "baskets" est présent dans l'article du panier
  
});
