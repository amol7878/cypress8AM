///<refrence types ="cypress/>

//describe,context
//it,specify

//Xdescribe,xcontext
//it.only/it.skip,specify.only,specify.skip

//alies===>Cypress veriable
//as("variable name")

//cy.get(".abc")===>Need perform multiple operations

//Example==>
//cy.get(".abc").type('xyz')
//cy.get(".abc").should("")//have.text,contain,include

describe("Alies (Cypress variables)",()=>{
    it('Need of variables',()=>{
        cy.visit('https://www.weifieldcontracting.com/contact/')
        cy.get('[name="input_1.3"]').type(' RAM ');
        //cy.get('[name="input_1.3"]').should('have.text','RAM');

        //what is the diffrence bt have.text & have.value?
        cy.get('[name="input_1.3"]').should('have.value'," RAM ");

        ////value==>user input
        ////text==>HTML text

        ////clear()---clear user input 
        cy.get('[name="input_1.3"]').clear();

        //how to call object methods (dot,bracket)
        //.dot
        //cy==>object
        //get==>method
        //cy.type.get()
    })
    it('Store cypress commands in variable',()=>{
        cy.visit('https://www.weifieldcontracting.com/contact/')
        let element=cy.get('[name="input_1.3"]')
        //parent command
        //get,contains,request,visit
        
        ////child command
        //type,click,check,clear,contains
        ////both parent+child==contains

        element.type(" RAM ");
        element.should('have.value'," RAM ")
        element.clear();
    })
})


