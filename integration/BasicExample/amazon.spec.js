////mocha///bdd
//test scenario ?=>what to test
//test case==>how to test

//mocha
describe("test search functionality",function(){
    it("tc01-verify seach functionality",function(){
        cy.visit("http://www.amazon.in/")
        cy.get("#twotabsearchtextbox").type("I phonde 14")
        cy.get("#nav-search-submit-button").click()
    })
})

// describe("test search functionality of flipkart", function () {
//     it("tc-02 verify search functionality", function () {
//         cy.visit("http://www.flipkart.com/")
//         cy.get("._3704LK").type("I phone 14")
//         cy.get(".L0Z3Pu").click()
//     })
// })