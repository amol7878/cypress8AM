///<refrence types ="cypress/>

//wait in cypress====>

//inter questions=>
//1.Typs of wait in cypress?
//2.what is implicit wait in cypress?
//3/what is explicit wait in cypress?

//1.static wait / implicit wait==>
//we also can called Dead wait in cypress 

//cy.wait(time/aliases,options)
//time->is millisconds.
//aliases->for dynamic wait.[we can pass aliases array here for multiple requests]

it('1.static /implicit wait',()=>{
    cy.visit('https://www.weifieldcontracting.com/contact/')
    cy.get('[name="input_1.3"]').as('element');
    cy.wait(2000);
    cy.get('@element').type(" RAM ");
    cy.get('@element').should('have.value'," RAM ")
    cy.get('@element').clear();
    cy.get('@element').should('have.value',"");
});


//Js->Default Syn
//DisAdv(Asyn)===>Takes more time for response
//cypress command -->Async

//Async-->API call
//Adv(Asyn)==>fast Exexution
//cypress execution-->Sync


//2.Dynamic Wait //Explicit wait==>
//cy.intercept(request type,url)

it.only("2.Dynamic/Explcit wait",()=>{
    cy.visit('https://www.weifieldcontracting.com/contact/')
    cy.get('[name="input_1.3"]').as('element');
    cy.wait(2000);
    cy.intercept('GET',"https://maps.googleeapis.com/maps/api/mapsjs/gen_204?csp_test='true'").as('@DynamicWait')
    cy.wait('@DynamicWait')
    cy.get('@element').type(" RAM ");
    cy.get('@element').should('have.value'," RAM ")
    cy.get('@element').clear();
    cy.get('@element').should('have.value',"");
})

