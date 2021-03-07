class ShopPage {
  getShopLink = () => {
    return cy.get(':nth-child(2) > .nav-link');
  };

  getPhoneNames = () => {
    return cy.get('h4.card-title');
  };

  getAddButton = () => {
    return cy.get('.btn.btn-info');
  };
  getCheckoutLink = () => {
    return cy.get('.nav-link.btn.btn-primary');
  };
}

export default ShopPage;
