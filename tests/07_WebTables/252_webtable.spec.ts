import { test, expect } from '@playwright/test';

//"//table[@id="customers"]/tbody/tr[5]/td[2]"-->xpath for helen
//https://awesomeqa.com/webtable.html
test('Web tabel', async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable.html")
    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const coloum = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();
    const firstpart = "//table[@id='customers']/tbody/tr["
    const secondpart = "]/td[";
    const thirdpart = "]";

    //now we apply loop as we have miltiple elements
    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= coloum; j++) {
            // const cell = page.locator(`xpath=//table[@id='customers']/tbody/tr[${i}]/td[${j}]`);
            // console.log(await cell.textContent())
            const dyanamicpath = firstpart + i + secondpart + j + thirdpart;
            console.log(dyanamicpath);
            //const dyanamicpath = `${firstpart}${i}${secondpart}${j}${thirdpart}`
            // both the ways are correct
            // const data = await page.locator(dyanamicpath).innerText();
            // console.log(data);
            // if (data.includes('Helen Bennett')) {
            //     const countryPath = `${dyanamicpath}/following-sibling::td`;
            //     const countryText = await page.locator(countryPath).innerText();
            //     console.log('------');
            //     console.log(`Helen Bennett is In - ${countryText}`);
            // }
        }
    }
});
