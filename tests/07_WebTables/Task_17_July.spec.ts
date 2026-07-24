import { test, expect } from "@playwright/test"

test("Clicking On Delete Button for terminate", async ({ page }) => {

    await page.goto("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");
    await page.getByRole('textbox', { name: "username" }).fill("admin");
    await page.getByRole('textbox', { name: "password" }).fill("Awesomeqa@4321");
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();

    const row = page.locator("//div[@class='oxd-table-card']");
    const rowcount = await row.count();
    const coloum = page.locator("//div[@class='oxd-table-card']//div[@class='oxd-table-cell oxd-padding-cell']");
    const coloumcount = await coloum.count();
    //console.log(rowcount);
    //console.log(coloumcount);
    for (let i = 1; i <= rowcount; i++) {


    }
});