///<reference types="Cypress"/>
describe("",()=>{
    it("Looping on Element",()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('i phone{enter}')
        cy.get('h2 a').each((el)=>{
            if(el.text().includes('5s')){
                cy.wait(4000)
                cy.wrap(el).click()
                return false
           }
        })
    })
})