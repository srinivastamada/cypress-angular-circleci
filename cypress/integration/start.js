describe("Cypress Angular Demo", () => {
  it("Should check project title", () => {
    cy.visit('http://localhost:4200');
    cy.get("h1").contains("Welcome to Cypress Project");
  });
});
