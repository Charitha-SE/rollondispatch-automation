const DriverPage = require('../Selectors/driverPage');
const RandomMethod = require('../../helper/randomHelpers');

class DriverAction extends DriverPage{
    constructor(page) {
        super();
        this.page = page;
        this.driverPage = new DriverPage(page);
    }
    async driverCreation() {
        await this.page.click(this.driversTab);
        await this.page.click(this.addNewDriverButton);
        
        const randomDriverName = RandomMethod.getRandomName();
        await this.page.fill(this.driveName, randomDriverName);
        console.log("Driver Name:", randomDriverName);

        const randomPhoneNumber = RandomMethod.generatePhoneNumber();
        await this.page.fill(this.driverPhonenumber, randomPhoneNumber);

        const randomAddress = RandomMethod.getRandomAddress();
        await this.page.fill(this.driverAddress, randomAddress);
        
        const randomCity = RandomMethod.getRandomCity();
        await this.page.fill(this.driverCity, randomCity);
        
        const randomZipcode = RandomMethod.getRandomZipCode();
        await this.page.fill(this.driveZipCode, randomZipcode);


    }
}

module.exports = DriverAction;