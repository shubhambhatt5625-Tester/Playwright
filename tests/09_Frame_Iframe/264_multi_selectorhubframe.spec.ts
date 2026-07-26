import { test, expect, FrameLocator, Frame, Locator } from '@playwright/test';
//here we are taking framelocaator for interface as we have go inside a frame.
test('Handeling selector hub Frame', async ({ page }) => {
    await page.goto("https://selectorshub.com/iframe-scenario/");
    let frame1: FrameLocator = page.frameLocator("#pact1").first();
    //here first is necessary, because here we have to section for frame (pact1)
    let frame2: FrameLocator = frame1.frameLocator("#pact2");
    let frame3: FrameLocator = frame2.frameLocator("#pact3");

    await frame1.locator('#inp_val').fill('No One');
    await frame2.locator('#jex').fill('Wife');
    await frame3.locator('#glaf').fill('Play');

    const headerText = await frame1.locator('h3').innerText();
    console.log(headerText);
    // here we find the headder text with frame one only as we know f2 and 3 are inside f1 only.
    await page.waitForTimeout(5000);

});

//error noeed to solve