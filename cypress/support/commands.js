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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//
const commands = {
  el: (name, opts) => cy.get(name.split(/\s+/g).map(t => `[data-test="${t}"]`).join(' '), opts),
  login: (username, password) => {
    cy.visit('')
    cy.el('login').within(() => {
      cy.el('username').type(username)
      cy.el('password').type(password)
      cy.el('login').click()
    })
  },
  logout: () => {
    cy.el('user').click()
    cy.el('user_menu logout').click()
  },
};

(() => { for (const k in commands) Cypress.Commands.add(k, commands[k]) })()
