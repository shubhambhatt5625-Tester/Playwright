import { test, expect } from '@playwright/test';

test('Test case title', async ({ page }) => {

    // ① Single — searchable
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes")
    await page.getByTestId("rs-single-input").click();
    await page.getByText("Puppeteer").click();
    //await page.getByTestId("rs-single-input").fill("WebdriverIO").click();//need to ask
    await page.pause();

    //② Multi — chips with remove
    await page.getByTestId("rs-multi-input").click();
    //await page.getByText("Pytest", { exact: true }).click();
    //exact is written so the match should come, it should match 100% or 
    //if there are various then it should click the first one.
    await page.getByText("Pytest").first().click();
    await page.pause();

});
