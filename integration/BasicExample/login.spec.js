describe("verify login functionality", () => {
    it.skip("Test case 1:Positive Login test", () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').type("student")
        cy.get("#password").type("Password123")
        cy.get("#submit").click()
        //chai assertion library
        cy.url().should('contain','practicetestautomation.com/logged-in-successfully/')
        cy.url().should('contain','https://practicetestautomation.com/logged-in-successfully/')
        cy.contains('Logged In Successfully').should('be.visible')
        cy.wait(4000)
        cy.contains('Log out').should('have.text', 'Log out')
        cy.contains('Log out').click()
    })
    it.skip("Test case 2:Negative username test", () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').type("student123")
        cy.get("#password").type("Password123")
        cy.get("#submit").click()
        //chai assertion library
        cy.get('#error').should('have.text','Your username is invalid!')
    })

    it.only("Test case 3:Negative password test", () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').type("student")
        cy.get("#password").type("Password123456")
        cy.get("#submit").click()
        //chai assertion library
        cy.get('#error').should('have.text','Your password is invalid!')
    })



})