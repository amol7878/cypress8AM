// dbclick
it("verify dbclick action", () => {
    cy.visit("https://example.cypress.io/commands/actions?");
    cy.contains("Double click to edit").dblclick();
    cy.get(".action-input-hidden.form-control").should("be.visible");
    //
    cy.get(".action-input-hidden").should("exist");
    cy.get(".action-input-hidden").should("be.visible");
    // "not.exist"
    // "not.be.visible"
});

// submit
// cy.submit()
it("verify submit action", () => {
    cy.visit("https://example.cypress.io/commands/actions?");
    cy.get("form.action-form").submit()
    cy.get("form.action-form").siblings("p").should("have.text", "Your form has been submitted!")

});

// select
// cy.select(value/values,option)
it.only("verify select action", () => {
    cy.visit("https://example.cypress.io/commands/actions?");
    // Single
    // cy.get(".form-control.action-select").select("apples") // HTML TXT
    // cy.get(".form-control.action-select").select("fr-apples")  // value

    // Multiple
    // cy.get("select.action-select-multiple").select(["apples", "oranges"])
    cy.get("select.action-select-multiple").select(["fr-apples", "fr-oranges"])
});