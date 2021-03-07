class HomePage {
  getEditBox = () => {
    return cy.get(':nth-child(1) > .form-control');
  };
  getTwoWayDataBinding = () => {
    return cy.get(':nth-child(4) > .ng-untouched');
  };
  getGender = () => {
    return cy.get('select');
  };
  getEntrepreneaur = () => {
    return cy.get('#inlineRadio3');
  };
}
export default HomePage;
