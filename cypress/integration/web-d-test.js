/// <reference types = "Cypress"/>

describe('Test Contact Us form', () => {
  it('Succesful submission via contact us form', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    cy.title().should('include', 'WebDriver');
    cy.url().should('include', 'contactus');
    cy.get('[name="first_name"]').type('Dejan');
    cy.get('[name="last_name"]').type('Vujetić');
    cy.get('[name="email"]').type('vujaga@yahoo.com');
    cy.get('textarea.feedback-input').type('Some random comments...');
    cy.get('[type="submit"]').click();
    cy.get('h1').should('have.text', 'Thank You for your Message!');
  });

  it('Browser Navigation Confirmation', () => {
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'contactus');
    cy.go('back');
    cy.reload();
    cy.url().should('include', 'http://www.webdriveruniversity.com/');
    cy.go('forward');
    cy.url().should('include', 'contactus');
    cy.go('back');
    cy.get('#login-portal')
      .invoke('removeAttr', 'target')
      .click({ force: true });
    cy.url().should('include', 'Login-Portal');
    cy.go('back');
    cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'To-Do');
    cy.go('back');
  });
});
