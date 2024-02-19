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
Cypress.Commands.add("SearchingForAProduct", () => {
  cy.visit("/");
  cy.get(".search-keyword").type("Cucumber");
  cy.get(".product > .product-name").contains("Cucumber");
  cy.get(".increment").should("be.visible").as("incrementButtons");
  cy.get("@incrementButtons").click();
  cy.get(".product-action > button").click();
  cy.get(".cart-icon > img").click();
  cy.get(".product-info > .product-name").contains("Cucumber");
  cy.get(".cart-preview > .action-block > button").click();
  cy.get(".product-name").should("be.visible");
  cy.get(".product-name").contains("Cucumber");
  cy.visit("/country");
  cy.get("select").select("Brazil");
  cy.get(".chkAgree").click();
  cy.get("button").click();
});
