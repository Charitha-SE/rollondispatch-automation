const LoginSelectors = require('../Selectors/loginPage');

class LoginPage extends LoginSelectors {
    constructor(page) {
        super();
        this.page = page;
    }

    async loginToApplication() {
        const userName = "xxxxxxxxxxx";
        const password = "xxxxxxxxx";
        await this.page.fill(this.username, userName);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginbutton);
    }

    async getToastMessage() {
        const toaster = this.page.locator(this.toaster);
        const textContent = await toaster.textContent();
        return textContent;
    }
}

module.exports = LoginPage;
