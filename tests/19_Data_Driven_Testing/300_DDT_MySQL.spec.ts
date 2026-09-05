import { test, expect } from '@playwright/test';
import { readMySQL } from './util/mysqlReader';
import { loginWithData } from './util/testData';

const mysqlConfigured = Boolean(
    process.env.MYSQL_HOST &&
    process.env.MYSQL_USER &&
    process.env.MYSQL_DATABASE,
);

test('MySQL login data', async ({ page }) => {
    test.skip(!mysqlConfigured, 'Set MYSQL_HOST, MYSQL_USER, and MYSQL_DATABASE to run this sample');

    const loginData = await readMySQL();
    for (const data of loginData) {
        await loginWithData(page, data);
        if (data.expectedURL) {
            await expect(page).toHaveURL(data.expectedURL);
        }
    }
});
