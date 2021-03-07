describe('Test Suite for intercept training', () => {
  it('My first intercept script', () => {
    let message = 'whoa, this comment does not exist';
    cy.visit(Cypress.env('interceptURL'));
    cy.get('.network-btn').click();
    cy.get('.network-post').click();

    cy.intercept(
      {
        method: 'PUT',
        url: '**/comments/*',
      },
      {
        statusCode: 404,
        body: {error: message},
        headers: {'access-control-allow-origin': '*'},
        delayMs: 500,
      }
    ).as    ('UpdateComment');
    cy.get('.network-put').click();
    cy.wait('@UpdateComment');
    cy.get('.network-put-comment').should('contain', message);
  });
});
