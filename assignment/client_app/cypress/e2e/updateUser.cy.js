describe("Start Application and Update User", () => {
  it("Loads Application", () => {
    cy.visit("http://localhost:3000/");
  });

  it("User Selection", () => {
    cy.contains("td", "Apple").click();
  });

  it("Edit User", () => {
    cy.get("button").contains("Edit").click();
  });

  it("Update User Last Name", () => {
    cy.get("input[id='register_lastname']")
      .clear()
      .type("Forest Updated")
      .should("have.value", "Forest Updated");
  });

  it("Save Form and Update User", () => {
    cy.get("button").contains("Save").click();
  });
});
