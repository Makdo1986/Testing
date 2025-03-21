// /tests/amazonOrder.spec.ts
import { test, expect } from '@playwright/test';
import { AmazonPage } from './pages/amazonPage';
import { CartPage } from './pages/cartPage';

test('commander des baskets sur amazon.fr', async ({ page }) => {
  // Créer des instances des pages
  const amazonPage = new AmazonPage(page);
  const cartPage = new CartPage(page);

  // 1. Accéder à Amazon.fr
  await page.goto('https://www.amazon.fr')
  await amazonPage.rejectCookies()
  
  // 2. Rechercher des baskets
  await amazonPage.searchForBaskets();

  // // 3. Appliquer le filtre Nike
  // await amazonPage.filterByNike();

  // 4. Sélectionner le premier produit
  await amazonPage.selectFirstProduct();

  // 5. Ajouter le produit au panier
  await cartPage.addProductToCart();

  // 6. Vérifier que le produit est bien dans le panier
  await cartPage.verifyProductInCart();

  // 7. Aller au panier
  await cartPage.goToCart();
});
