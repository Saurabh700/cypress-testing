/// <reference types="Cypress" />

describe("Check the todo application", () => {
  it("Check the initial basic structure", () => {
    cy.visit("http://example.cypress.io/todo");

    cy.get(".new-todo").should("exist");
    cy.get(".todo-count").should("exist");
    cy.get(".filters").should("exist");
  });

  it("Should be able to add task", () => {
    cy.visit("http://example.cypress.io/todo");

    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("learn redux {enter}");
    cy.get(".todo-list").children().should("have.length", 3);
  });

  it("Should be able to add task and check count in footer", () => {
    cy.visit("http://example.cypress.io/todo");

    cy.get(".todo-count strong").should("have.text", 2);
    cy.get(".new-todo").type("learn redux {enter}");
    cy.get(".todo-count strong").should("have.text", 3); // to select the child of todo-count use space in between
  });

  //   inspect > element in cypress to see the classes of that particular div element
});
