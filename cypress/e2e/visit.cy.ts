describe('', () => {
    it('Verify page', () => {
        cy.visit('https://uitestingplayground.com/home')
        cy.title().should('eq','UI Test Automation Playground')
    });
    it('Verify page', () => {
        cy.visit('https://uitestingplayground.com/home')
        cy.window().title().then(element=> {
            cy.log(element)
        })
    });
});