// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import ShopPage from '../integration/pageObjects/ShopPage';
import CheckoutPage from '../integration/pageObjects/CheckoutPage';

const shopPage = new ShopPage();
const checkoutPage = new CheckoutPage();

Cypress.Commands.add('clickAddButtonByName', ({propertyName}) => {
  shopPage.getPhoneNames().each(($el, index, $last) => {
    propertyName.forEach((data) => {
      if ($el.text().includes(data)) {
        shopPage.getAddButton().eq(index).click();
      }
    });
  });
});

Cypress.Commands.add('verifyPhoneNamesByAddedOrder', ({phoneName}) => {
  let totalValue = 0;

  checkoutPage.getProductNames().each(($el, index, $list) => {
    expect($el.text()).to.equal(phoneName[index].name);
  });

  checkoutPage.getProductPrice().each(($el, index, $list) => {
    const phonePrice = phoneName[index].price;
    totalValue = totalValue + parseInt(phonePrice);
    cy.log(totalValue);
    expect($el.text().replace(/[\D]/g, '')).to.equal(phonePrice);
    if (index === phoneName.length - 1) {
      checkoutPage.getProductTotalPrice().should('include.text', totalValue);
    }
  });
});
