class ProtoCommereceHomePage {
  getCheckOutLabel = () => {
    return cy.get('a.nav-link.btn.btn-primary');
  };
  getDeliveryLocationTextBox = () => {
    return cy.get('#country');
  };
  getSuggestionItemFromSearch = () => {
    return cy.get('.suggestions > ul > li > a');
  };
  getAgreeTermsAndConditionsCheckbox = () => {
    return cy.get('#checkbox2');
  };
  getSubmitButton = () => {
    return cy.get('input[type="submit"]');
  };
}
export default ProtoCommereceHomePage;
