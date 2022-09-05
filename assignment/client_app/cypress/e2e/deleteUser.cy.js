describe("Start Application and Delete User", () => {
  it("Loads Application", () => {
    cy.visit("http://localhost:3000/");
  });

  it("User Selection", () => {
    cy.contains("td", "Apple").click();
  });

  it("Delete User", () => {
    cy.get("button").contains("Delete").click();
  });

  it("Confirm Delete", () => {
    cy.get("button").contains("Confirm").click();
  });
});
