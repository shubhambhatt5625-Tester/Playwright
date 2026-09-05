import { test, expect } from '@playwright/test';
import path from 'path';
import { readYAML } from './util/yamlReader';
import { loginWithData } from './util/testData';

const loginData = readYAML(path.join(__dirname, 'test-data', 'login-data.yml'));

for (const data of loginData) {
    test(`YAML login: ${data.description}`, async ({ page }) => {
        await loginWithData(page, data);
        if (data.expectedURL) {
            await expect(page).toHaveURL(data.expectedURL);
        }
    });
}
