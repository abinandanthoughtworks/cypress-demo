/// <reference types="Cypress" />
import MyTilesHomePage from '../pageObjects/myTiles';

describe('Verify if Granite Sinks page is displayed', () => {
  let applicationConfig;
  const myTilesHomePage = new MyTilesHomePage();
  before('Navigate to the myTiles website', () => {
    cy.fixture('myTilesApp/config').then((data) => {
      applicationConfig = data;
      cy.log(applicationConfig.url);
      cy.visit(applicationConfig.url);
    });
  });
  it('Test 1', () => {
    myTilesHomePage.getKitchenSink().invoke('show');
  });
});
