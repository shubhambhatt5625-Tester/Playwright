import { test, expect } from "@playwright/test"

test('verify the error message', async ({ page }) => {
    await page.goto("https://vwo.com/free-trial/");
    let inputbox = page.locator("#page-v1-step1-email");
    await inputbox.fill("ShubhamBhatt");
    //await page.locator("#page-su-step1-v1-email").fill("Shubham Bhatt");
    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();
    await page.locator("//button[@data-qa='page-su-submit']").first().click();

});