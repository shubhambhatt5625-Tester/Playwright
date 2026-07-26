import { test, expect } from '@playwright/test';

test('Hover and click on menu', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.locator('[data-testid="nav-add-ons"]').hover();
    await page.getByTestId("test-id-Meal").click();
    await page.getByLabel('Add-ons submenu').screenshot({ path: 'screenshot2.png' });
    //await page.pause();
    // const alloption = await page.getByLabel('Add-ons submenu').allInnerTexts();
    const alloption = await page.getByLabel('Add-ons submenu').innerText();
    console.log(alloption);
});