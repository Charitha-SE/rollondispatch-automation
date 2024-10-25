const BuildShipmentPage =  {
    buildShipment: "//div//a//span[text()='Build a Shipment']",
    customerNameField: "//label[text()='Customer Name']//parent::div//div//div//div[@class=' css-19bb58m']//input",             
    customerNameInput: "#react-select-6-input",     
    pickUp: "(//img[@alt='Pin'])[1]", 
    pinDrop: "(//div/img)[4]",
    useThisLocation: "//div//button[text()='Use this location']",
    dropOff: "(//img[@alt='Pin'])[2]",
    estimatedDistance: "input[name='estimatedDistance']",
    saveAndClose: "button[class*='desktop-view-element']",
    saveAndContinue: "//button[text()='Save and Continue']",
    startDate: "svg.fa-calendar.cursor-pointer",
    endDate: "svg.fa-calendar.cursor-pointer",
    weightLbs: "input[name='weightInPounds']",
    unloadedWeight: "input[name='unloadedWeightInPounds']",
    numberOfLoads: "input[name='loadNumber']",
    trucksNeeded: "input[name='_49kTrucksRequired']",
    commodityField: "//label[text()='Commodity']//parent::div//div//div//div[@class=' css-19bb58m']//input",
    commodityInput: "#react-select-6-input",
    commodityName: "input[name='commodityName']",
    saveCommodity: "//button[text()='Save']",
    rateType: "//div[contains(text(),'Select Rate Type')]",
    addLocationsCheckbox: "(//input[@type='checkbox'])[1]",
    rate: "(//input[@placeholder='Enter amount'])[1]",
    producer: "input[name='producer']",
    estWeight: "input[name='estWeightInPounds']",
    estPickUpHeadCount: "input[name='estHeadCount']",
    estMiles: "input[name='estMiles']",
    estUnloadedWeight: "(//input[@placeholder='Enter Weight'])[4]",
    estDropOffHeadCount: "(//input[@placeholder='Enter Head Count'])[2]",
    buildShipmentButton: "//div//button[text()='Build Shipment']",
    buildShipmentToaster: "//div[contains(text(),'Shipment is created')]",
    goToLoadBoradButton: "//button[text()='Go to load board']"
};

module.exports = { BuildShipmentPage };