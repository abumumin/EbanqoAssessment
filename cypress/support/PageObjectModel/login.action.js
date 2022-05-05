import ElementMapper from '../../fixtures/elementMapper'
const em = new ElementMapper()
Cypress.Commands.add('openSite', function(){
    cy.visit("/")
})
Cypress.Commands.add('enterLoginDetails', function(){
    cy.get(em.userIDField).type(em.userIDText)
    cy.get(em.passwordField).type(em.passwordText)
    cy.get(em.loginButton).click()
})
Cypress.Commands.add('clickOnLoginButton', function(){
    cy.get(em.loginButton).click()
})