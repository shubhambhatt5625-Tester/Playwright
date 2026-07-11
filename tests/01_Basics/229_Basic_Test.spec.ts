import { test, expect } from '@playwright/test';

test("Verify the title", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
});

/*Line 1: import { test, expect } from '@playwright/test';
- This is like opening your toolbox. We're grabbing two tools: test (to write a test) and expect (to check if something is correct).
Line 3: test("Verify the title", async ({ page }) => {
- This creates a new test and gives it a name: "Verify the title". 
- page is like a robot that opens a web browser for you.
Line 4: await page.goto("https://app.vwo.com");
- This tells the robot: "Go to this website." The await means "wait until the page is fully loaded before doing the next thing."
Line 5: await expect(page).toHaveTitle("Login - Wingify");
- This checks: "Does the page's title say 'Login - Wingify'?" If it does, the test passes. If not, the test fails.*/