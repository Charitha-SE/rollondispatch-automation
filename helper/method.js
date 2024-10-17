const RandomMethod = require('./randomHelpers');
const BuildShipmentPage = require('../Pages/Selectors/buildShpmentPage')

class DropDownHandler extends BuildShipmentPage {
    constructor(page) {
        super(page);
    }

    async createCommodity() {
        await this.page.pause();
        await this.page.click(this.commodityField);
        await this.page.fill(this.commodityField, "Create");

        await this.page.getByText('Create New Commodity', { exact: true }).click();

        const randomCommodityName = RandomMethod.getCommodityName();

        await this.page.fill(this.commodityName, randomCommodityName);
        console.log(`Generated Commodity Name: ${randomCommodityName}`);

        await this.page.click(this.saveCommodity);
    }

    async selectRateType(rateType) {
        await this.page.click(this.rateType); 
        await this.page.getByText(rateType, { exact: true }).click();
        console.log(`Selected Rate Type: ${rateType}`);
    }
}

module.exports = DropDownHandler;
