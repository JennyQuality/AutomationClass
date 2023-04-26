import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("eu acesso a pagina home", () => {
    cy.visit("https://automationexercise.com/");
})

When("acesso o login", () => {
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
})

When("insiro o meu nome de usuário", () => {
    cy.get('input[data-qa="login-email"]').type('jennifer.evandia@teste.com')
})

When("insiro uma senha incorreta", () => {
    cy.get('input[data-qa="login-password"]').type('senha')
})

 When("Quando clico no botão", () => {
    cy.get('[data-qa="login-button"]').click()
})

Then("Então devo ver uma mensagem de erro", () => {
    cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
})
