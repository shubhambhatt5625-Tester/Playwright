import { test, expect, FrameLocator, Frame, Locator } from '@playwright/test';
//here we are taking framelocaator for interface as we have go inside a frame.
test('Handeling Multi Frame', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    let mainframe: FrameLocator = await page.frameLocator("[name='main']");
    const output = await mainframe.locator("h2").innerText();
    console.log(output);

    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames: ' + allFrames.length);

    let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();
    await page.pause();

});