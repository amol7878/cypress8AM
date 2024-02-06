// rightclick
it("verify rightclick action", () => {
    cy.visit("https://example.cypress.io/commands/actions?");
    cy.get(".rightclick-action-div").last().rightclick();
    cy.get(".rightclick-action-div").last().should("have.class", "hidden");
});

// type (keypress)
it("verify keypress", () => {
    cy.visit("https://example.cypress.io/commands/actions?");
    // .type("ABC")
    // .type("{keyName}")

    cy.get("#email1").type("ABC@gmail.com").should("have.value", "ABC@gmail.com");
    cy.get("#email1").type("{backspace}").should("have.value", "ABC@gmail.co");
    cy.get("#email1").type("{selectall}{backspace}").should("have.value", "");
});

it("verify keypress", () => {
    cy.visit("https://www.amazon.com/ref=nav_bb_logo");
    cy.wait(4000)
    cy.get("#twotabsearchtextbox").type("Mobile{enter}")
});