// /tests/pages/amazonPage.ts
import { Page, Locator } from '@playwright/test';

export class AmazonPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly nikeBrandFilter: Locator;
  readonly firstProductLink: Locator;
  readonly rejectCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="field-keywords"]');
    this.nikeBrandFilter = page.locator('input[name="s-ref-checkbox-Nike"]');
    this.firstProductLink = page.getByRole('listitem').filter({ hasText: 'N°1 des ventesdans Baskets mode homme+ 15 autres couleurs/motifsSponsorisé' }).getByRole('link').first()
    this.rejectCookiesButton = page.locator('button#sp-cc-rejectall-link');
  }

  // Rejeter les cookies et attendre que la pop-up disparaisse
  async rejectCookies() {
    const boutonRefuser = this.page.getByRole('button', { name: 'Refuser' });
    //if (await boutonRefuser.isVisible()) {
      await boutonRefuser.click();
    //}
  }

  // Recherche des baskets
  async searchForBaskets() {
    await this.searchInput.fill('baskets');
    await this.searchInput.press('Enter');
    await this.page.waitForSelector('.s-main-slot');
  }

  // // Filtrer les résultats par Nike
  // async filterByNike() {
  //   await this.nikeBrandFilter.click();
  //   await this.page.waitForSelector('.s-main-slot');
  // }

  // Sélectionner le premier produit
  async selectFirstProduct() {
      await this.firstProductLink.click()
  }
}


// // /tests/pages/amazonPage.ts
// import { Page, Locator } from '@playwright/test';

// export class AmazonPage {
//   readonly page: Page;
//   readonly searchInput: Locator;
//   readonly nikeBrandFilter: Locator;
//   readonly firstProductLink: Locator;
//   readonly rejectCookiesButton: Locator;  // Sélecteur du bouton "Refuser les cookies"

//   constructor(page: Page) {
//     this.page = page;
//     this.searchInput = page.locator('input[name="field-keywords"]');
//     this.nikeBrandFilter = page.locator('input[name="s-ref-checkbox-Nike"]');
//     this.firstProductLink = page.locator('.s-main-slot .s-result-item').first().locator('a.a-link-normal');
//     this.rejectCookiesButton = page.locator('button#sp-cc-rejectall-link');  // Mise à jour du sélecteur
//   }

//   // Rejeter les cookies si le bouton est visible et cliquable
//   async rejectCookies(): Promise<void> {
//     try {
//       // Attendre que le bouton soit visible et cliquable
//       await this.rejectCookiesButton.waitFor({ state: 'attached', timeout: 5000 });  // Attente de l'attachement
//       await this.rejectCookiesButton.waitFor({ state: 'visible', timeout: 5000 });  // Attente de visibilité
//       await this.rejectCookiesButton.click();  // Cliquer pour rejeter les cookies
//       await this.page.waitForTimeout(1000);  // Attendre que l'action soit effectuée
//     } catch (error) {
//       console.log('Le bouton pour rejeter les cookies n\'a pas été trouvé ou n\'est pas cliquable.');
//     }
//   }

//   // Recherche des baskets
//   async searchForBaskets(): Promise<void> {
//     await this.searchInput.fill('baskets');
//     await this.searchInput.press('Enter');
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Filtrer les résultats par Nike
//   async filterByNike(): Promise<void> {
//     await this.nikeBrandFilter.click();
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Sélectionner le premier produit
//   async selectFirstProduct(): Promise<void> {
//     const productLink = await this.firstProductLink.getAttribute('href');
//     if (productLink) {
//       await this.page.goto(productLink);
//     }
//   }
// }


// // /tests/pages/amazonPage.ts
// import { Page, Locator } from '@playwright/test';

// export class AmazonPage {
//   readonly page: Page;
//   readonly searchInput: Locator;
//   readonly nikeBrandFilter: Locator;
//   readonly firstProductLink: Locator;
//   readonly rejectCookiesButton: Locator;  // Sélecteur du bouton "Refuser les cookies"

//   constructor(page: Page) {
//     this.page = page;
//     this.searchInput = page.locator('input[name="field-keywords"]');
//     this.nikeBrandFilter = page.locator('input[name="s-ref-checkbox-Nike"]');
//     this.firstProductLink = page.locator('.s-main-slot .s-result-item').first().locator('a.a-link-normal');
//     //this.rejectCookiesButton = page.locator('button#sp-cc-rejectall-link');  // Mise à jour du sélecteur
//     //await page.getByRole('button', { name: 'Refuser' }).click()
//     this.rejectCookiesButton =  page.getByRole('button', { name: 'Refuser' })
    
//   }

//   // Rejeter les cookies si le bouton est visible
//   async rejectCookies(): Promise<void> {
//     try {
//       // Vérifier si le bouton est visible et cliquable
//       if (await this.rejectCookiesButton.isVisible()) {
//         console.log('Rejet des cookies...');
//         await this.rejectCookiesButton.click();  // Cliquer pour rejeter les cookies
//         await this.page.waitForTimeout(1000);  // Attendre que l'action soit effectuée
//       }
//     } catch (error) {
//       console.log('Le bouton pour rejeter les cookies n\'a pas été trouvé.');
//     }
//   }

//   // Recherche des baskets
//   async searchForBaskets(): Promise<void> {
//     await this.searchInput.fill('baskets');
//     await this.searchInput.press('Enter');
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Filtrer les résultats par Nike
//   async filterByNike(): Promise<void> {
//     await this.nikeBrandFilter.click();
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Sélectionner le premier produit
//   async selectFirstProduct(): Promise<void> {
//     const productLink = await this.firstProductLink.getAttribute('href');
//     if (productLink) {
//       await this.page.goto(productLink);
//     }
//   }
// }


// // /tests/pages/amazonPage.ts
// import { Page, Locator } from '@playwright/test';

// export class AmazonPage {
//   readonly page: Page;
//   readonly searchInput: Locator;
//   readonly nikeBrandFilter: Locator;
//   readonly firstProductLink: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.searchInput = page.locator('input[name="field-keywords"]');
//     this.nikeBrandFilter = page.locator('input[name="s-ref-checkbox-Nike"]');
//     this.firstProductLink = page.locator('.s-main-slot .s-result-item').first().locator('a.a-link-normal');
//   }

//   // Recherche des baskets
//   async searchForBaskets(): Promise<void> {
//     await this.searchInput.fill('baskets');
//     await this.searchInput.press('Enter');
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Filtrer les résultats par Nike
//   async filterByNike(): Promise<void> {
//     await this.nikeBrandFilter.click();
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Sélectionner le premier produit
//   async selectFirstProduct(): Promise<void> {
//     const productLink = await this.firstProductLink.getAttribute('href');
//     if (productLink) {
//       await this.page.goto(productLink);
//     }
//   }
// }


// // /tests/pages/amazonPage.ts
// import { Page, Locator } from '@playwright/test';

// export class AmazonPage {
//   readonly page: Page;
//   readonly searchInput: Locator;
//   readonly nikeBrandFilter: Locator;
//   readonly firstProductLink: Locator;
//   readonly rejectCookiesButton: Locator;  // Ajout du sélecteur pour le bouton de rejet des cookies

//   constructor(page: Page) {
//     this.page = page;
//     this.searchInput = page.locator('input[name="field-keywords"]');
//     this.nikeBrandFilter = page.locator('input[name="s-ref-checkbox-Nike"]');
//     this.firstProductLink = page.locator('.s-main-slot .s-result-item').first().locator('a.a-link-normal');
//     this.rejectCookiesButton = page.locator('#sp-cc-rejectall-link');  // Sélecteur pour le bouton de rejet des cookies
//   }

//   // Rejeter les cookies si le bouton est visible
//   async rejectCookies(): Promise<void> {
//     if (await this.rejectCookiesButton.isVisible()) {
//       await this.rejectCookiesButton.click();
//       await this.page.waitForTimeout(1000);  // Attendre un peu pour que l'action soit effectuée
//     }
//   }

//   // Recherche des baskets
//   async searchForBaskets(): Promise<void> {
//     await this.searchInput.fill('baskets');
//     await this.searchInput.press('Enter');
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Filtrer les résultats par Nike
//   async filterByNike(): Promise<void> {
//     await this.nikeBrandFilter.click();
//     await this.page.waitForSelector('.s-main-slot');
//   }

//   // Sélectionner le premier produit
//   async selectFirstProduct(): Promise<void> {
//     const productLink = await this.firstProductLink.getAttribute('href');
//     if (productLink) {
//       await this.page.goto(productLink);
//     }
//   }
// }
