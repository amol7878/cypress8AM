///<reference types="cypress"/>

//what to test ===>test Scenerio
//1> valid
//2> invalid
//how to test==> test case
//Framework
/*
1)Mocha
2)BDD
*/
//js typescript

//command line interface==>CLI ===npx cypress open
///<reference types="cypress"/>
describe('verify the contactUs Form',function(){
    it('verify the contactUs form with valid deatails',function(){
        //to visit the website use cy.visit()
        cy.visit('https://mediaproper.com/contact-us/')
        //get Element
        cy.get('#input_1_1').type('DummyUser')
        cy.get('#input_1_2').type('DummyLastName')
        cy.get('#input_1_3').type('DummyUser@Dummy.com')
        cy.get('#input_1_4').type('9876543210')
        cy.get('input[placeholder="Website"]').type('www.dummywebsite.com')
        cy.get('input[placeholder="Company"]').type('DummyCompany')
        cy.get('textarea[placeholder="What can we do for you?"]').type('test1234433322')
        cy.get('.gform_button').click()
        //assertion====>vlalidation
        //implicit assertion===>should()
        //explicit assertion===>expect()
        cy.get('h1').should('be.visible')

    })
    it.only('TC-02 negative testing of email field in cintactus form',function(){
        //to visit the website use cy.visit()
        cy.visit('https://mediaproper.com/contact-us/')
        //get Element
        cy.get('#input_1_1').type('DummyUser')
        cy.get('#input_1_2').type('DummyLastName')
        cy.get('#input_1_3').type('DummyUserDummy.com')
        cy.get('#input_1_4').type('9876543210')
        cy.get('input[placeholder="Website"]').type('www.dummywebsite.com')
        cy.get('input[placeholder="Company"]').type('DummyCompany')
        cy.get('textarea[placeholder="What can we do for you?"]').type('test1234433322')
        cy.get('.gform_button').click()
        cy.contains('The email address entered is invalid, please check the formatting (e.g. email@domain.com)').should('be.visible')

    })
})