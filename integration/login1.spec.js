//AAA ===>Action Arrange Assertions
describe("verify the login functionality",()=>{
    it("verify the login functionality with valid credentials",()=>{
        //step1==>visit the url
        cy.visit('https://www.saucedemo.com/')
    //step2==>Enter the userName
    cy.get('#user-name').type('standard_user')
    //step3==>Enter the password
    cy.get('#password').type('secret_sauce')
    //step4====>click on login button
    cy.get('.submit-button').click()
    //step5===>verify the successfull login
    //assertion
    //implicit assertions
    //Explicit assertions
    cy.url().should('contains','inventory')
    cy.get('.app_logo').should('be.visible')
    })
})


//<input id="user-name"></input>
//formula
//tagname[attr="value"]
//input[id="user-name"]
//by id
//use #
//#user-name

//by class
//use.