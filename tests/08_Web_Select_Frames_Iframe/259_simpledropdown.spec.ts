import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Select!', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown", "Option 2");//from drop down select option 2.
    // Page.selectOption(selector: string, values: string.
    // value?: string; or 
    // label?: string; or 
    // index?: number;
});