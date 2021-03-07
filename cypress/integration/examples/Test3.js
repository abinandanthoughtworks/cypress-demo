/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

beforeEach(
  'Visit the URL cy.visit`https://rahulshettyacademy.com/AutomationPractice/`',
  () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  }
);

describe('All UI elements exercise', () => {
  it('checkbox exercise 1', () => {
    cy.get('#checkBoxOption1').as('option1Checkbox');
    cy.get('@option1Checkbox')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');
    cy.wait(2000);
    cy.get('@option1Checkbox')
      .uncheck()
      .should('not.be.checked')
      .and('have.id', 'checkBoxOption1');
    cy.get('input[type=checkbox]').check(['option2', 'option3']);
  });

  it('static dropdown test', () => {
    cy.get('select').select('Option1').should('have.value', 'option1');
  });

  it('dynamic dropdown test', () => {
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {
      if ($el.text() === 'India') {
        $el.click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India');
  });

  it('visible/invisible element test', () => {
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
  });
  it('Radio button test', () => {
    cy.get('input[value=radio2]').check().should('be.checked');
  });
  it('cypress alerts', () => {
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();
    cy.on('window:alert', (alertString) => {
      expect(alertString).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });
    cy.on('window:confirm', (alertString) => {
      expect(alertString).to.equal('Hello , Are you sure you want to confirm?');
    });
  });
  it('handling child tabs', () => {
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.go('back');
    cy.url().should('include', 'rahulshetty');
  });
  it('web tables', () => {
    cy.get('.table-display > tbody > tr  td:nth-child(2)').each(
      ($el, index, $list) => {
        if ($el.text().includes('Python')) {
          cy.get($el.next()).should('have.text', 25);
        }
      }
    );
    cy.get('td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes('Jenkins')) {
        cy.get('td:nth-child(2)').eq(index).next().should('have.text', '20');
      }
    });
  });
  it.skip('child tab handling using external bata website', () => {
    cy.visit(
      'https://www.bata.in/bataindia/e-100_c-262/all-under-999/men.html'
    );
    cy.get('div[class="alert col-xs-12 text-center covid-msg"] a:visible')
      .invoke('removeAttr', 'target')
      .click();
  });

  it('Mouseover tests', () => {
    cy.get('.mouse-hover-content').invoke('show');
    cy.get('a[href="#top"]').click();
    cy.url().should('include', 'top');
  });
  it('Get an HTML and its value via prop', () => {
    cy.get('#opentab').then((element) => {
      cy.log(element.prop('href'));
    });
  });
});
