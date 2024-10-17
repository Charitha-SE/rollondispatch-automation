class CustomerPage {
    constructor(page) {
        this.page = page;
        this.customersTab = "//div//a//span[text()='Customers']";
        this.createCustomerButton = "button[class='transparent-button btn btn-primary']";
        this.CustomerRadioButton = "input[value='Customer']";
        this.CustomerName = "(//input[@placeholder='Enter Customer Name'])[2]";
        this.PhoneNumber = "//input[@name='phoneNumber']";
        this.CustomerEmail = "input[placeholder='Enter Email Address']"
        this.CustomerAddress = "//input[@name='streetAddress']";
        this.CustomerCity = "//input[@name='city']";
        this.CustomerState = "(//div[contains(@class,'css-19bb58m')])[3]";
        this.CustomerZipCode = "//input[@name='zipCode']";
        this.CustomerNotes = "//textarea[@name='notes']";
        this.HighPriority = "//input[@value='High']";
        this.NormalPriority = "//input[@value='Normal']";
        this.CustomerShrinkage = "//input[@name='autoShrinkPercentage']";
        this.Cancel = "//button[text()='Cancel']";
        this.addCustomer = "//button[text()='Add Customer']";
        this.toaster = "//div[contains(text(),'New Customer Added Successfully')]";
    }
}
module.exports = CustomerPage;
