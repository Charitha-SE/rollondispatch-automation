const LoginPage = require('../Pages/Actions/login');

async function login(page) {
    const loginPage = new LoginPage(page);
    await page.goto("https://azdev-app.rollondispatch.com/login"); 
    await loginPage.loginToApplication();
    await page.waitForURL('https://azdev-app.rollondispatch.com/dashboard');
}

module.exports = { login };
