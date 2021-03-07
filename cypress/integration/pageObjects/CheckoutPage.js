class CheckoutPage {
  getProductNames = () => {
    return cy.get('h4 a[href="#"]');
  };
  getProductPrice = () => {
    return cy.get('td:nth-child(4) > strong');
  };
  getProductTotalPrice = () => {
    return cy.get('h3 strong');
  };
  getCheckoutButton = () => {
    return cy.get('button.btn.btn-success');
  };
}
export default CheckoutPage;
