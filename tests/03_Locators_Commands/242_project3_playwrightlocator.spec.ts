import { test, expect } from "@playwright/test"

test("Playwrigh Locator", async ({ page }) => {
    await page.goto("https://express.adobe.com")
    await page.getByRole('textbox', { name: "email" }).fill("Qai28021+newaccount11@adobetest.com");
    await page.getByRole("button", { name: "continue" }).click();
    await page.getByRole('textbox', { name: "password" }).fill("Adobe@123");
    await page.getByRole("button", { name: "continue" }).click();
});