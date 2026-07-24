import { test, expect } from '@playwright/test';

test('Customize Drop Down', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    //Programming language
    await page.locator("#lang-trigger").click();
    await page.getByRole('option', { name: "python" }).click();
    //await page.getByTest("Java Script").click();
    //Web framework
    await page.getByTestId("framework-trigger").click();
    await page.getByText("Next.js").click();
    //Experience level
    await page.locator("#experience-trigger").click();
    await page.getByText("Senior (7+ years)").click();
    await page.pause();
});