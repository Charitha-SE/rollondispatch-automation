const CustomerPage = require('../Selectors/customerPage');
const RandomMethod = require('../../helper/randomHelpers');
const { th } = require('@faker-js/faker');

class CustomerAction extends CustomerPage {
    constructor(page) {
        super();
        this.page = page;
        this.customerPage = new CustomerPage(page);
    }

    async customerCreation() {
        await this.page.click(this.customersTab);
        await this.page.click(this.createCustomerButton);
        await this.page.click(this.CustomerRadioButton);
        
        const randomCustomerName = RandomMethod.getRandomName();
        await this.page.fill(this.CustomerName, randomCustomerName);
        console.log("Customer Name:", randomCustomerName);

        const randomPhoneNumber = RandomMethod.generatePhoneNumber();
        await this.page.fill(this.PhoneNumber, randomPhoneNumber);
        
        const randomAddress = RandomMethod.getRandomAddress();
        await this.page.fill(this.CustomerAddress, randomAddress);
        
        const randomCity = RandomMethod.getRandomCity();
        await this.page.fill(this.CustomerCity, randomCity);
        
        const randomZipcode = RandomMethod.getRandomZipCode();
        await this.page.fill(this.CustomerZipCode, randomZipcode);
        
        const customerNotes = RandomMethod.generateRandomNotes(15);
        await this.page.fill(this.CustomerNotes, customerNotes);
        
        const radioButtonSelectors = ["//input[@value='High']", "//input[@value='Normal']"];
        const randomIndex = Math.floor(Math.random() * radioButtonSelectors.length);
        const randomRadioButton = radioButtonSelectors[randomIndex];
        await this.page.check(randomRadioButton);
        
        const invoiceTypeSelector = ["//input[@value='LumpSum']", "//input[@value='BrokenOut']"];
        const randomType = Math.floor(Math.random() * invoiceTypeSelector.length);
        const invoiceType = invoiceTypeSelector[randomType];
        await this.page.check(invoiceType);
        
        const autoShrinkage = RandomMethod.getRandomShrinkage();
        await this.page.fill(this.CustomerShrinkage, autoShrinkage);
        
        await this.page.click(this.addCustomer);
        
        await this.page.waitForSelector(this.toaster);

        return randomCustomerName;
    }
}

module.exports = CustomerAction;
