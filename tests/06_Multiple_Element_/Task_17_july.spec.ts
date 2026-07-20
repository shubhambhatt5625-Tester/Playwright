import { test, expect } from "@playwright/test"

test("student login and url verify", async ({ page }) => {
    page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let username = page.locator("#email");
    await username.fill("Abced@qwerty.com");
    let password = page.locator("#password");
    await password.fill("Qwert");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Login to Practice Account" }).click();
    await expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=Abced%40qwerty.com&password=Qwert&remember=yes#login-success");
    console.log("URL verified");

});