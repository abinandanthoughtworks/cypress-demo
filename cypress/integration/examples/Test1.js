/// <reference types="Cypress" />

describe('Test Suite#1', () => {
  it('Test Case#1', () => {
    let webElement;

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);
    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const productName = $el.find('.product-name').text();
        if (productName.includes('Cashew')) {
          $el.find('button').click();
        }
      });
    cy.get('.brand').then((element) => {
      webElement = element;
      cy.log(webElement.text());
    });
  });
});
