import { test, expect } from '@playwright/test';

test('Spicjet', async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
    // await page.pause();
    await page.getByText("Allow this time", { exact: true });
    await page.getByTestId("to-testID-origin").click();
    await page.getByTestId("to-testID-origin").getByRole('textbox').fill("de")
    await expect(page.getByTestId("to-testID-origin")).toContainText("Dehradun");
    await page.getByText("Dehradun", { exact: true }).click();
    await page.getByTestId("to-testID-destination").click();
    await page.getByTestId("to-testID-destination").getByRole('textbox').fill("ba")
    await expect(page.getByTestId("to-testID-destination")).toContainText("Bengaluru");
    await page.getByText("Bengaluru", { exact: true }).click();
});