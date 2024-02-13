describe('Login Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    })
    it('login', () => {
        cy.login('test', 'Test1234*')
        cy.contains('Log out')
    })
    it.skip('login with PageObject', () => {
    })
})