const { test, expect } = require('@playwright/test');
 
test('Search for a pair of sneakers and order the first model found on Amazon', async ({ page }) => {  
  await page.goto('https://www.amazon.fr');
  
  // close the pop up
  await page.getByLabel('Accepter').click();
  // Enter the search term
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('baskets');
  // Click on the search button
  await page.getByRole('button', { name: 'Go' }).click();
  
});
 
// All tests are for amazon.fr
 
// Test case 1 : Verify navigation to amazon.fr
// Step 1: Open the browser and navigate to the amazon.fr 
// Expected Result: Verify that the current URL is amazon.fr

test('Verify navigation to amazon.fr', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
    const url = page.url();
    expect(url).toBe('https://www.amazon.fr/');
})

// Test case 2 : Verify cookie acceptance
// Step 1: Open the browser and navigate to the amazon.fr
// Step 2: Accept cookies
// Expected Result: Verify that the cookies are accepted (the button disappears after the click)

test('Verify cookie acceptance', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  const cookieButton = await page.queryByLabel('Accepter');
  expect(cookieButton).toBeNull();
})
 
// Test case 3 : Verify product search
// Step 1: Open the browser and navigate to the amazon.fr and Close the pop-up
// Step 2: Search for "sneakers"
// Expected Result: Verify that the search results are displayed

test('Verify product search', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('sneakers');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const searchResults = await page.queryByRole('list');
  expect(searchResults).not.toBeNull();
})
 
// Test case 4 : Verify selection of the first product
// Step 1: Navigate to amazon.fr, perform the search
// Step 2: Select the first product
// Expected Result: Verify that the product page is displayed (e.g., check the product title element)

test('Verify selection of the first product', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('sneakers');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Nike Air Max 270, Chaussure de Course Homme' }).click();
  const productTitle = await page.queryByRole('heading', { name: 'Nike Air Max 270, Chaussure de Course Homme' });
  expect(productTitle).not.toBeNull();
})

// Test case 5 : Verify adding product to cart
// Step 1: Navigate to amazon.fr, perform the search and select the product
// Step 2: Add to cart
// Expected Result: Verify that the product is added to the cart (e.g., check for a confirmation message)

test('Verify adding product to cart', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('sneakers');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Nike Air Max 270, Chaussure de Course Homme' }).click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  const confirmationMessage = await page.queryByRole('alert');
  expect(confirmationMessage).not.toBeNull();
})

// Test case 6 : Verify accessing the cart
// Step 1: Navigate to amazon.fr, perform the search and add the product to the cart
// Step 2: Go to the cart
// Expected Result: Verify that the product is present in the cart

test('Verify accessing the cart', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('sneakers');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Nike Air Max 270, Chaussure de Course Homme' }).click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByRole('link', { name: 'Voir le panier' }).click();
  const cartProduct = await page.queryByRole('link', { name: 'Nike Air Max 270, Chaussure de Course Homme' });
  expect(cartProduct).not.toBeNull();
})

// Test case 7 : Verify the checkout process
// Step 1: Navigate to amazon.fr, perform the search, add the product to the cart and go to the cart
// Step 2: Proceed to checkout
// Expected Result: Verify that the checkout process is initiated (e.g., check for the presence of the checkout page)

test('Verify the checkout process', async ({ page }) => {
  await page.goto('https://www.amazon.fr');
  await page.getByLabel('Accepter').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('sneakers');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByRole('link', { name: 'Nike Air Max 270, Chaussure de Course Homme' }).click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.getByRole('link', { name: 'Voir le panier' }).click();
  await page.getByRole('button', { name: 'Passer la commande' }).click();
  const checkoutPage = await page.queryByRole('heading', { name: 'Passer la commande' });
  expect(checkoutPage).not.toBeNull();
})