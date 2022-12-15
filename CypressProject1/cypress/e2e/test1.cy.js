/// <reference types="cypress"/>

it ('Google Search', () => {

    cy.visit ('https://google.com')
    cy.get('.gLFyf').type ('Maltese Kosova{Enter}')
    cy.contains('Imazhe').click()
    




})