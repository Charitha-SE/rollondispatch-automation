class BuildShipmentPage {
    constructor(page) {
        this.page = page;
        this.buildShipment = "//div//a//span[text()='Build a Shipment']"; 
        this.customerNameField = ".css-19bb58m";             
        this.customerNameInput = "#react-select-6-input";     
        this.pickUp = "(//img[@alt='Pin'])[1]"; 
        this.pinDrop ="(//div/img)[4]";
        this.useThisLocation = "//div//button[text()='Use this location']";
        this.dropOff = "(//img[@alt='Pin'])[2]";
        this.estimatedDistance = "input[name='estimatedDistance']";
        this.SaveAndClose = "button[class*='desktop-view-element']"
        this.SaveAndContinue = "//button[text()='Save and Continue']"
        this.StartDate = "svg.fa-calendar.cursor-pointer"
        this.EndDate = "svg.fa-calendar.cursor-pointer"
        this.weightLbs = "input[name='weightInPounds']";
        this.unloadedWeight = "input[name='unloadedWeightInPounds']";
        this.numberOfLoads = "input[name='loadNumber']";
        this.trucksNeeded = "input[name='_49kTrucksRequired']";
        this.commodityField = "//label[text()='Commodity']//parent::div//div//div//div[@class=' css-19bb58m']//input";
        this.commodityInput = "#react-select-6-input"
        this.commodityName = "input[name='commodityName']";
        this.saveCommodity = "//button[text()='Save']";
        this.rateType = "//div[contains(text(),'Select Rate Type')]";
        this.addLocationsCheckbox = "(//input[@type='checkbox'])[1]";
        this.rate = "(//input[@placeholder='Enter amount'])[1]";
        this.producer = "input[name='producer']";
        this.estWeight = "(//input[@placeholder='Enter Weight'])[3]";
        this.estPickUpHeadCount = "(//input[@placeholder='Enter Head Count'])[1]"
        this.estMiles = "(//input[@placeholder='Enter Miles'])[1]"
        this.estUnloadedWeight = "(//input[@placeholder='Enter Weight'])[4]";
        this.estDropOffHeadCount = "(//input[@placeholder='Enter Head Count'])[2]"
        this.buildShipmentButton = "((//div//button[text()='Build Shipment'])[1]";
        this.buildShipmentToaster = "//div[contains(text(),'Shipment is created')]"
    }
}

module.exports = BuildShipmentPage;