///<reference types="cypress"/>//
describe('Traveral Methods',function(){
    it('TR-01-first',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr',{timeout:50000}).should('be.visible')
        cy.get('._4rR01T').first().should('have.text','APPLE iPhone 11 (White, 128 GB)')
    })
    it('TR-02-Last',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr',{timeout:50000}).should('be.visible')
        cy.get('._4rR01T').last().should('have.text','APPLE iPhone 14 Plus (Midnight, 128 GB)')
    })
    it.only('TR-03-eq()',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._10Ermr',{timeout:50000}).should('be.visible')
        cy.get('._4rR01T').eq(0).should('have.text','APPLE iPhone 11 (White, 128 GB)')
    })


})