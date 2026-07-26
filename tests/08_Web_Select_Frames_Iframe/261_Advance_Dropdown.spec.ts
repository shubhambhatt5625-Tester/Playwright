import { test, expect } from '@playwright/test';

test('Test case title', async ({ page }) => {

    // ① Single — searchable
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes")
    await page.getByTestId("rs-single-input").click();
    await page.getByText("Puppeteer").click();
    //await page.getByTestId("rs-single-input").fill("WebdriverIO").click();//need to ask

    //② Multi — chips with remove
    await page.getByTestId("rs-multi-input").click();
    //await page.getByText("Pytest", { exact: true }).click();
    //exact is written so the match should come, it should match 100% or 
    //if there are various then it should click the first one.
    await page.getByText("Pytest").first().click();
    await page.keyboard.press("Escape");//this is to get out as the pop up remains open.
    //when any pop up remains open we cannot proceed as because pop windows shouldm closed.

    //③ Creatable multi — type and Enter
    await page.getByTestId("rs-creatable-input").click();
    await page.getByText("api-testing").first().click();
    await page.getByText("performance", { exact: true }).click();
    await page.getByRole('option', { name: "security" }).click();
    await page.keyboard.press("Escape");
    await page.pause();

    //⑤ Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();
    await page.pause();

});
