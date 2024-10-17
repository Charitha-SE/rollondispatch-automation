const { test, expect } = require('@playwright/test');
const CustomerAction = require('../Pages/Actions/customer');

const {login} = require('../helper/loginHelper');

test('Create Customer', async ({ page }) => {

    const customerAction = new CustomerAction(page);

    await login(page);

    await customerAction.customerCreation();

    await page.waitForSelector(customerAction.toaster); 
    const toastMessage = await page.textContent(customerAction.toaster);
    expect(toastMessage).toContain('New Customer Added Successfully');

});
