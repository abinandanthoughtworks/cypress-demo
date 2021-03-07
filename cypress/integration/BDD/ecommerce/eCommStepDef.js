import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../integration/pageObjects/Homepage';
import ShopPage from '../../../integration/pageObjects/ShopPage';
import CheckoutPage from '../../../integration/pageObjects/CheckoutPage';
import ProtoCommerceHomePage from '../../../integration/pageObjects/ProtoCommereceHomePage';

let applicationConfig, name, gender;
const homePage = new HomePage();
const shopPage = new ShopPage();
const checkoutPage = new CheckoutPage();
const protoCommerceHomePage = new ProtoCommerceHomePage();
Given('I open Ecommerce Page', function () {
  cy.visit(Cypress.env('url') + '/angularpractice');
  cy.fixture('angularapplicationdetails/config').then((data) => {
    applicationConfig = data;
  });
});

When('I add items to Cart', function () {
  shopPage.getShopLink().click();
  cy.clickAddButtonByName({
    propertyName: applicationConfig.productNames,
  });
  shopPage.getCheckoutLink().click();
});

And('Validate the total prices', function () {
  cy.verifyPhoneNamesByAddedOrder({
    phoneName: applicationConfig.productNamesExpectedOrder,
  });
});

Then('Select the country submit and verify Thankyou message', () => {
  checkoutPage.getCheckoutButton().click();
  protoCommerceHomePage
    .getCheckOutLabel()
    .should('include.text', `( ${applicationConfig.productNames.length} )`);
  protoCommerceHomePage
    .getDeliveryLocationTextBox()
    .type(applicationConfig.deliverylocation);
  Cypress.config('defaultCommandTimeout', '11000');
  protoCommerceHomePage.getSuggestionItemFromSearch().click();
  protoCommerceHomePage
    .getAgreeTermsAndConditionsCheckbox()
    .check({force: true});
  protoCommerceHomePage.getSubmitButton().click();
});

When('I fill the form details', function (dataTable) {
  name = dataTable.rawTable[1][0];
  gender = dataTable.rawTable[1][1];
  homePage.getEditBox().type(name, {force: true});
  homePage.getGender().select(gender);
});
Then('Validate the form behavior', function () {
  homePage.getEditBox().should('have.attr', 'minlength', '2');
  homePage.getTwoWayDataBinding().then((element) => {
    expect(element.val()).to.equal(name);
  });
});

And('Select the Shop Page', function () {});
