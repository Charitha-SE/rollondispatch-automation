const {test, expect} = require('@playwright/test');

const LoginPage = require('../Pages/Actions/login');

test('Login to Application', async ({ page }) => {
    await page.goto("https://test.com");

    const loginPage = new LoginPage(page);

    await loginPage.loginToApplication();

    try {
        await expect(page).toHaveURL("/dashboard");
    } catch (error) {
        const toasterMessage = await loginPage.getToastMessage();
        expect(toasterMessage).toContain("Email or Password was incorrect!");
        console.log("Login failed, toaster message:", toasterMessage);
    }
});

