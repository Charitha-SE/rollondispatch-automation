const { test, expect } = require('@playwright/test');
const Login = require('../pages/Actions/login');
const { users } = require('../data/credentials');

test('Verify the login is successful', async ({ page }) => {
    const login = new Login(); 
    await page.goto('/');
    await page.pause();
    await login.enterUsername(page, users.login.username);
    await login.enterPassword(page, users.login.password);
    await login.clickLoginButton(page);
    await expect(page).toHaveURL(/.*dashboard/);
    const welcomeText = page.locator('text=Welcome, Agar Transportation!');
    await expect(welcomeText).toBeVisible();
});
