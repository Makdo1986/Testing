import { test, expect } from '@playwright/test';

// Réalisé avec l'enregistreur de playwright

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.fr/');

  await page.getByRole('textbox', { name: 'Saisissez les caractères' }).click();
  await page.getByRole('textbox', { name: 'Saisissez les caractères' }).fill('XFMCBJ');

  await page.getByRole('button', { name: 'Continuer les achats' }).click();

  await page.getByRole('textbox', { name: 'Search For' }).click();
  await page.locator('#nav-bb-searchbar div').nth(1).click();

  await page.getByRole('textbox', { name: 'Search For' }).fill('basket');
  await page.getByRole('textbox', { name: 'Search For' }).press('Enter');
  await page.getByRole('button', { name: 'Aller' }).click();
  await page.getByRole('button', { name: 'Accepter' }).click();

  await page.getByRole('link', { name: 'Furuian Chaussures de Sécurité Hommes Femmes Légère Basket de Securite Chaussures de Travail Homme Embout en Acier Bottes de Sécurité', exact: true }).click();
  await page.locator('#native_dropdown_selected_size_name').selectOption('0,B0D6R364QF');
  
  await page.goto('https://www.amazon.fr/gp/aw/d/B0D6R364QF/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=e7c0041f45266553a2a3c5212da1e416&hsa_cr_id=0&qid=1740751599&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&pd_rd_w=qTyE8&content-id=amzn1.sym.fcb06097-6196-4e78-932c-0f6f89d56105%3Aamzn1.sym.fcb06097-6196-4e78-932c-0f6f89d56105&pf_rd_p=fcb06097-6196-4e78-932c-0f6f89d56105&pf_rd_r=V54F2WHB7AWR8E95DPC3&pd_rd_wg=pbEvS&pd_rd_r=1ed18569-0631-42a4-b75f-b40dd296fce1&th=1&psc=1');
  
  await page.getByLabel('Ajouter au panier', { exact: true }).click();
});