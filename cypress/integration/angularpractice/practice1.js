/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import HomePage from '../pageObjects/Homepage';
import ShopPage from '../pageObjects/ShopPage';
import CheckoutPage from '../pageObjects/CheckoutPage';
import ProtoCommerceHomePage from '../pageObjects/ProtoCommereceHomePage';

describe.only('Angular application practice', () => {
  let applicationConfig;
  const homePage = new HomePage();
  const shopPage = new ShopPage();
  const checkoutPage = new CheckoutPage();
  const protoCommerceHomePage = new ProtoCommerceHomePage();
  before('Gathering test data', () => {
    cy.fixture('angularapplicationdetails/config').then((data) => {
      applicationConfig = data;
      cy.log(applicationConfig.name);
    });
    cy.visit(Cypress.env('url'));
  });

  it.only('TC_AP01_Verify if the Two way binding example textbox displays the data entered in the Name Textbox', () => {
    homePage
      .getEditBox()
      .type(applicationConfig.name)
      .should('have.value', applicationConfig.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getTwoWayDataBinding().then((element) => {
      expect(element.val()).to.equal(applicationConfig.name);
    });
    homePage.getEntrepreneaur().should('be.disabled', true);
    shopPage.getShopLink().click();
    cy.clickAddButtonByName({
      propertyName: applicationConfig.productNames,
    });
    shopPage.getCheckoutLink().click();
    cy.verifyPhoneNamesByAddedOrder({
      phoneName: applicationConfig.productNamesExpectedOrder,
    });
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
});
