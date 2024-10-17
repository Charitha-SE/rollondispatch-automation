class DriverPage{
    constructor(page){
        this.page = page;
        this.driversTab = ".nav-inside a:nth-of-type(5)";
        this.addNewDriverButton = "//button[normalize-space()='Add New Driver']";
        this.driveName = "input[name='name']";
        this.driverPhonenumber = "input[name='phoneNumber']";
        this.truckingCompanyField = "";
        this.truckingCompanyInputField = "";
        this.createNewTruckingCompany = "";
        this.TruckingCoName = "";
        this.TruckingCoNumber = "";
        this.unitNumber = "input[name='unitNumber']";
        this.trailerNumber = "input[name='trailerNumber']";
        this.trailerSize = "";
        this.driverAddress = "input[name='streetAddress']";
        this.driverCity = "input[name='city']";
        this.driverState = "(//div[@class=' css-19bb58m'])[6]";
        this.driveZipCode = "input[name='zipCode']";
        this.initialLocationTag = "(//div[@class=' css-19bb58m'])[7]";
        this.driverAppEnable = "input[type='checkbox']";
        this.ownerOperator = "input[value='OwnerOperator']";
        this.EmployeeDriver = "input[value='EmployeeDriver']";
        this.createDriveButton = "button[class='primary-button btn btn-primary']";
    }
}
module.exports = DriverPage;