/// <reference types = "Cypress"/>

describe('Testing checkboxes', () => {
  it('Validating checkbox', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation');
    cy.url().should('include', 'home/automation');
    cy.get('#monday').check().should('be.checked');
    cy.get('#tuesday').check().should('be.checked');
    cy.get('#wednesday').check().should('be.checked');
  });

  it('Uncheck checkboxes', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation');
    cy.url().should('include', 'home/automation');
    cy.get('#tuesday').uncheck().should('not.be.checked');
  });
});
