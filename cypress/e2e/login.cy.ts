import {LoginPage} from "../../pages/login"

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    })

    it.skip('login', () => {
        cy.get('#userName').type('test')
        cy.get('#password').type('Test1234*')
        cy.contains('button', 'Login').click()
        //cy.get('#login').click()
        cy.contains('Log out')
    })

    it('login with PageObject', () => {
        LoginPage.submitButtonLogin()
        cy.contains('Log out')
    })

})