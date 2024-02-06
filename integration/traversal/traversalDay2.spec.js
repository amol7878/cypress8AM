///<reference types="cypress"/>//
//http://example.cypress.io/commands/traversal//
describe('Traversal Day 2',()=>{
    it('children()',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._1kidPb').children().should('have.length',9)
        cy.get('._1kidPb').children().eq(0).should('have.class','_2I9KP_')
    })
    it.only('find',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._1kidPb').children().first().find('svg').should('have.class','RWB9Wm')
        cy.get('._1kidPb').children().first().find('svg').should('have.attr','height','8')
        
    })
    it('filter()',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone')
        cy.get('.L0Z3Pu').click()
        cy.get('._1kidPb').children().filter('a[href="/travel/flights?otracker=nmenu_Flights"]').should('have.text','Flights')

    })
})