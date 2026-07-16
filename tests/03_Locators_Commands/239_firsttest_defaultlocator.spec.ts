import { test, expect } from "@playwright/test";

test('default locator', async ({ page }) => {
    await page.goto("https://app.vwo.com/#/login");
    let inputusername = page.locator("#login-username");
    let inputpassword = page.locator("#login-password");
    let clickonloginbutton = page.locator("#js-login-btn");
    await inputusername.fill("Qualitest");
    await inputpassword.fill("Qwerty");
    await clickonloginbutton.click();
});

  // Defalt Locators
    //  id, name, className, Tag., Custom Locator (Via CSS selector)
    // By using the default locators
    // id => #id
    // className => .
    // name => [name="value"]
    // Tag => [tag]

    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID" 
    // data-gtm-form-interact-field-id="0"
    // >