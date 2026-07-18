import { chromium } from "playwright"

// here we are creating a session storage for login which we can re-use as many as time we want.
// currently we for each test case we have to make login test case, but now we can use this function.

async function loginfuncationality() {
    let browserlaunch = await chromium.launch({ headless: false });
    let contextopen = await browserlaunch.newContext();
    let page = await contextopen.newPage();//page open
    await page.goto("https://express.adobe.com");
    await page.waitForTimeout(1500);
    // await page.fill("#EmailPage-EmailField", "qai52867+reg01@adobetest.com");
    // await page.waitForTimeout(2000);
    // await page.locator("#EmailPage-ContinueButton").click();
    // await page.waitForTimeout(2000);
    // await page.fill("#login-password", "Adobe@123");
    // await page.waitForTimeout(2000);
    // await page.locator("#PasswordPage-ContinueButton").click();
    // await page.waitForTimeout(1500);
    await page.getByRole('textbox', { name: "email" }).fill("qai52867+reg01@adobetest.com");
    await page.getByRole("button", { name: "continue" }).click();
    await page.getByRole('textbox', { name: "password" }).fill("Adobe@123");
    await page.getByRole("button", { name: "continue" }).click();
    //await page.click("#js-login-btn");
    //await page.waitForTimeout(3000);
    //await page.waitForURL(/#\/(dashboard|home)/, { timeout: 10000 });
    // Wait for login to actually complete before snapshotting storage —
    // otherwise the auth cookie isn't set yet and the saved state is empty.
    await contextopen.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browserlaunch.close();
}
loginfuncationality();

//npx tsx tests/04_Session_Storage/247_loginfunctionalitysave.spec.ts