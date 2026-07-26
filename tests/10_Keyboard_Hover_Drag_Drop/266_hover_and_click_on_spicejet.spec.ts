import { test, expect } from '@playwright/test';

test('Hover and click', async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
    await page.pause();
    await page.getByText('Add-ons', { exact: true }).hover();
    await page.getByText('FlyEarly', { exact: true }).click();
    await page.screenshot({ path: 'screenshot.png' });

    // Add await page.screenshot() at the desired point:
    // await page.screenshot({ path: 'screenshot.png' });
    // For a full-page screenshot:
    // await page.screenshot({ path: 'screenshot.png', fullPage: true });
    // To capture a specific element:
    // await page.getByText('FlyEarly', { exact: true }).screenshot({ path: 'element.png' });
    // Note: page.pause() opens Playwright Inspector which already lets you take screenshots interactively via the inspector UI.


});