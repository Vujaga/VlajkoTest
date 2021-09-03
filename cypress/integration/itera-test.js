/// <reference types = "Cypress"/>

describe('Testing on demo page', () => {
  it('Validating logg in', () => {
    cy.visit('https://itera-qa.azurewebsites.net/Login');
    cy.title().should('eq', '- Testautomation practice page');
    cy.location('protocol').should('eq', 'https:');
    cy.get('#Username').type('vujaga');
    cy.get('#Password').type('laganese2126');
    cy.get('.btn-primary').should('be.visible').click();
    cy.get('h3').should('have.text', 'Welcome vujaga');
  });

  it('Creating new user', () => {
    cy.contains('Create New').click();
    cy.title().should('eq', 'Create - Testautomation practice page');
    cy.get('#Name').type('Miloš Jović');
    cy.get('#Company').type('Vidrak');
    cy.get('#Address').type('NOV 65/6');
    cy.get('#City').type('Valjevo');
    cy.get('#Phone').type('0665558897');
    cy.get('#Email').type('misa123@hotmail.com');
    cy.get('.btn-primary').click();
    cy.url().should('include', 'Login');
    cy.get('#Username').type('vujaga');
    cy.get('#Password').type('laganese2126');
    cy.get('.btn-primary').should('be.visible').click();
  });

  it('Deleting user', () => {
    cy.get(':nth-child(5) > :nth-child(7) > .btn-outline-danger').click();
    cy.get('h3').should('have.text', 'Are you sure you want to delete this?');
    cy.get('.btn-outline-danger').click();
    cy.get('#Username').type('vujaga');
    cy.get('#Password').type('laganese2126');
    cy.get('.btn-primary').should('be.visible').click();
  });
});
