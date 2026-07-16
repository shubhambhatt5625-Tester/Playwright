import { test, expect } from "@playwright/test"

/*test("default,xpath,css", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login")
    let inputuserbycss = page.locator('css="[@id="login-username"]"')
    let inputpassbyxpath = page.locator('xpath=//[@id="login-password"]')
    let clickonsigupbyrelativexpath = page.locator('//button[@id="js-login-btn"]');

    await inputuserbycss.fill("abcdef")
    await inputpassbyxpath.fill("hijklmn");
    await clickonsigupbyrelativexpath.click();
});*/
test("default,xpath,css", async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login")
    let inputuserbydefault = page.locator('#login-username')
    let inputpassbyxpath = page.locator('xpath=//input[@id="login-password"]')
    let clickonsigupbyrelativexpath = page.locator('xpath=//button[@id="js-login-btn"]');

    await inputuserbydefault.fill("abcdef")
    await inputpassbyxpath.fill("hijklmn");
    await clickonsigupbyrelativexpath.click();
});