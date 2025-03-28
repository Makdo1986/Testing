import { chromium, firefox, webkit, Browser } from 'playwright';
import { test, expect } from '@playwright/test';

async function runTest(browserType: 'chromium' | 'firefox' | 'webkit') {
    const browser: Browser = await (browserType == 'chromium' ? chromium : browserType == 'firefox' ? firefox : webkit).launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://example.com'); // Remplace par l'URL du site à tester
    
    console.log(`Testing on ${browserType}:`, await page.title());
    
    await browser.close();
}

test('EPrime - Correct Text', async ({ page }) => {

(async () => {
    await Promise.all([
        runTest('chromium'),
        runTest('firefox'),
        runTest('webkit')
    ]);
})()

})