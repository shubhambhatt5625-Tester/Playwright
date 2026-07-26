import { test, expect, FrameLocator, Frame } from '@playwright/test';
//here we are taking framelocaator for interface as we have go inside a frame.
test('Handeling Single Frame', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehicleframe: FrameLocator = await page.frameLocator("#frame-one");
    await page.pause();
    await vehicleframe.locator("#RESULT_TextField-1").fill("Baleno");
    await vehicleframe.locator("#RESULT_TextField-2").fill("Shubham Bhatt");
    await vehicleframe.locator("#RESULT_TextField-3").fill("Uk07bx2626");
    await vehicleframe.locator("#RESULT_RadioButton-1").selectOption("Hatchback");
    await vehicleframe.locator("#RESULT_TextField-4").fill("2017");
    await vehicleframe.locator("#RESULT_TextArea-1").fill("Well Maintain And service is Up to Date.");
    await vehicleframe.locator("#vehicle-submit").click();

    let output = await vehicleframe.locator("#vehicle-output").innerText();
    console.log(output);


});
