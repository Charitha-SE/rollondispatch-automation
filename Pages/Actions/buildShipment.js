const BuildShipmentPage = require('../Selectors/buildShpmentPage');
const DateGenerator = require('../../helper/dateHelper');
const RandomMethod = require('../../helper/randomHelpers');
const DropDownHandler = require('../../helper/method');

class BuildShipment extends BuildShipmentPage {
    constructor(page) {
        super(page); 
    }

    async shipmentCreation(randomCustomerName) {

        await this.page.click(this.buildShipment);
        await this.page.click(this.customerNameField);

        await this.page.fill(this.customerNameInput, randomCustomerName);

        await this.page.waitForTimeout(3000);
        await this.page.getByText(randomCustomerName, { exact: true }).click();
        
        await this.page.click(this.pickUp);
        await this.page.waitForTimeout(3000);

        const pinDropElement = await this.page.locator(this.pinDrop);
        const boundingBox = await pinDropElement.boundingBox();

        await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(boundingBox.x + boundingBox.width / 3 + 20, boundingBox.y + boundingBox.height / 3 + 20, { steps: 10 });
        await this.page.mouse.up();

        await this.page.waitForTimeout(3000);

        await this.page.click(this.useThisLocation);

        await this.page.click(this.dropOff);
        await this.page.waitForTimeout(3000);

        await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(boundingBox.x + boundingBox.width / 4 + 20, boundingBox.y + boundingBox.height / 4 + 20, { steps: 10 });
        
        await this.page.mouse.up();

        await this.page.waitForTimeout(1000);

        await this.page.click(this.useThisLocation);
        await this.page.click(this.SaveAndContinue);

        await this.page.waitForSelector(this.StartDate, { state: 'visible' });
        
        await this.page.locator(this.StartDate).first().click();
        await this.page.waitForSelector('.react-datepicker', { state: 'visible' });
        await this.page.locator('.react-datepicker__day--today').click();


        await this.page.waitForSelector(this.EndDate, { state: 'visible' });
        await this.page.locator(this.EndDate).nth(1).click();
        await this.page.waitForSelector('.react-datepicker', { state: 'visible' });

        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 2);
        const futureDay = futureDate.getDate();
        const daySelector = `//div[contains(@class, 'react-datepicker__day') and text()="${futureDay}"]`;
        await this.page.locator(daySelector).click();


        await this.page.fill(this.weightLbs, "9000");
        await this.page.fill(this.unloadedWeight, "98500");
        await this.page.fill(this.numberOfLoads, "2");
        await this.page.fill(this.trucksNeeded, "1");
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        

        const dropDownHandler = new DropDownHandler(this.page);
        await dropDownHandler.createCommodity();
        
        
        await dropDownHandler.selectRateType("Per CWT"); 
        await this.page.check(this.addLocationsCheckbox);

        const rateUSD = RandomMethod.getRate();
        // await this.page.fill(this.rate, rateUSD);
        await this.page.click(this.buildShipmentButton);
        await this.page.waitForSelector(this.buildShipmentToaster);
        // await this.page.pause();
        
    }
};

module.exports = BuildShipment;
