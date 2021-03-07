/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

let testData = undefined;
describe('All UI elements exercise', () => {
  before('getting test data', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.fixture('example').then((data) => {
      testData = data;
    });
  });

  it('Handling IFrames', () => {
    cy.frameLoaded('#mce_0_ifr');
    cy.iframe().find('p').clear();
    cy.iframe().find('p').type(testData.name);
    /*cy.get('.tox-statusbar__branding > a')
      .invoke('removeAttr', 'target')
      .click();*/
  });
});
