import { Page } from '@playwright/test';

export interface LoginDataRow {
    description: string;
    username: string;
    password: string;
    expectedURL?: string;
}

export async function loginWithData(page: Page, data: LoginDataRow): Promise<void> {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.getByRole('textbox', { name: 'Email Address' }).fill(data.username);
    await page.getByRole('textbox', { name: 'Password' })
        .or(page.locator('#password'))
        .or(page.locator('[name="password"]'))
        .fill(data.password);
    await page.getByRole('button', { name: 'Login to Practice Account' })
        .or(page.getByTestId('login-button'))
        .or(page.getByText('Login to Practice Account'))
        .click();
}
