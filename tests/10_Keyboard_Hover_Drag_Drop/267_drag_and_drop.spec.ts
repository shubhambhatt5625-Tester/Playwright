import { test, expect, Locator } from '@playwright/test';

test('drag and drop', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    const cola = await page.locator("#column-a");
    const colb = await page.locator("#column-b")
    await cola.dragTo(colb);
    // await page.locator("#column-a").dragTo(page.locator("#column-b"));
    // await page.pause();
    // await page.screenshot({ path: 'screenshot1.png' });

});