// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("Login", () => {
    cy.visit("http://automationpractice.com/")
    cy.url().should("include", "index.php")
    cy.get('.login').click()
    cy.get('#email').type('Blue123@yahoo.com')
    cy.get('#passwd').type('Blue123!')
    cy.get('#SubmitLogin > span').click()
    cy.url().should("include", "index.php?controller=my-account")
    cy.get('.page-heading').should("include.text", "My account")
    cy.get('.info-account').should("include.text", "Welcome to your account. Here you can manage all of your personal information and orders.")
});

