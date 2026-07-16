import { test, expect } from '@playwright/test';

test("verify that we are navigating to our web site", async ({ page }) => {
    await page.goto("https://www.adobe.com/express/login?msockid=1d4fff772ca761542c46e9792d5560e8")
});