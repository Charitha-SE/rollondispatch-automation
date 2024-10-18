class LoginSelectors {
    constructor() {
        this.username = "[name = 'email']";
        this.password = "[name = 'password']";
        this.loginbutton = ".submit-button";
        this.toaster = ".Toastify__toast-body div:nth-of-type(2)";
    }
}

module.exports = LoginSelectors;
