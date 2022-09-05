describe("Start Application and Create User", () => {
  it("Loads Apllication", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Click on New Button and Opens the Form", () => {
    cy.get("button").contains("New").click();
  });

  it("Fill Form Details", () => {
    cy.get("input[id='register_username']")
      .type("apple")
      .should("have.value", "apple");

    cy.get("input[id='register_email']")
      .type("app@fruits.com")
      .should("have.value", "app@fruits.com");

    cy.get("input[id='register_password']")
      .type("app@123")
      .should("have.value", "app@123");

    cy.get("input[id='register_confirm']")
      .type("app@123")
      .should("have.value", "app@123");

    cy.get("input[id='register_firstname']")
      .type("Apple")
      .should("have.value", "Apple");
    cy.get("input[id='register_middlename']")
      .type("Red")
      .should("have.value", "Red");
    cy.get("input[id='register_lastname']")
      .type("Forest")
      .should("have.value", "Forest");
    cy.get("textarea[id='register_address']")
      .type("#2212, Apple Forest")
      .should("have.value", "#2212, Apple Forest");
  });

  it("Submit Form and Create User", () => {
    cy.get("button").contains("Create").click();
  });
});
