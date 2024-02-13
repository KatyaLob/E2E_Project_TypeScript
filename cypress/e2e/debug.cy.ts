describe('Login Page', () => {
    beforeEach(() => {
        cy.visit({
            url: 'click',
            method: 'GET'
        })
    })
    it.skip('debug', () => {
        cy.get('#badButton').debug().click()
    })

    it('pause', () => {
        cy.pause()
        cy.get('#badButton')
        cy.pause()
        cy.get('#badButton').should('have.css','background-color', 'rgb(40,167,69)')
    })
})