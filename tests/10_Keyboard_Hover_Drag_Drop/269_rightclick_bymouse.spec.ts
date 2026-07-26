import { test, expect, Locator } from '@playwright/test';

test('By Using Mouse ', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");
    await page.locator("span.context-menu-one").first().click({ button: 'right' });
    //here we are taking (.) as we have taken class here not id  
    await page.pause();
    await page.getByTestId('ctx-menu').screenshot({ path: 'element.png' });
    const ctxprint = await page.locator("#ctx-menu").innerText();
    console.log(ctxprint);
    //output Edit
    // ⌘E
    // Cut
    // ⌘X
    // Copy
    // ⌘C
    // Paste
    // ⌘V
    // Delete
    // ⌫
    // Quit
    // ⌘Q

    const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions);

    //   ['Edit',   '⌘E',
    //   'Cut',    '⌘X',
    //   'Copy',   '⌘C',
    //   'Paste',  '⌘V',
    //   'Delete', '⌫',
    //   'Quit',   '⌘Q'
    // ]
});