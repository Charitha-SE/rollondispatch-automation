const { test } = require('@playwright/test');
const CustomerAction = require('../Pages/Actions/customer');
const BuildShipment = require('../Pages/Actions/buildShipment');
const {login} = require('../helper/loginHelper');


test.only('Creating a Shipment', async({page})=>{
    const customerAction = new CustomerAction(page);
    const buildShipment = new BuildShipment(page);

    await login(page);

    const randomCustomerName = await customerAction.customerCreation();
    customerAction.ValidateCustomerCreation();
    await buildShipment.shipmentCreation(randomCustomerName);
});
