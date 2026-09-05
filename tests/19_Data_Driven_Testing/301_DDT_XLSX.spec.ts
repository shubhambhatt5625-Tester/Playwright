import { test, expect } from '@playwright/test';
import path from 'path';
import { readXLSX } from './util/xlsxReader';
import { loginWithData } from './util/testData';

const loginData = readXLSX(path.join(__dirname, 'test-data', 'login-data.xlsx'));

for (const data of loginData) {
    test(`XLSX login: ${data.description}`, async ({ page }) => {
        await loginWithData(page, data);
        if (data.expectedURL) {
            await expect(page).toHaveURL(data.expectedURL);
        }
    });
}
