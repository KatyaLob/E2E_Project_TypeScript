import {LocCodingLogin} from "../../pages/localCoding/LocalCoding";
describe('LOGIN', () => {

    beforeEach(() => {
        cy.session('mySession', () => {
            cy.visit(`${Cypress.env('prod')}/user/login`)
            LocCodingLogin.buttonLogin(Cypress.env('email'),Cypress.env('password'))
        },{cacheAcrossSpecs:true})
    })

    it('loginPage', () => {
        cy.visit(`${Cypress.env('prod')}/course`)
    })
})
