/// <reference types="cypress"/>

describe("Github browser", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.github.com/**").as("fetchFromGithub");
    cy.visit("http://localhost:3000");
  });

  it("should have search field and button", () => {
    cy.get("input").invoke("attr", "placeholder").should("contain", "Search");
    cy.get("button").contains("Search");
  });

  it("should display search results", () => {
    cy.get("input").type("master");
    cy.get("button").click();

    cy.wait("@fetchFromGithub");
    cy.get(".card").find(".card-body");
  });

  it("should display repository page after clicking searched result", () => {
    cy.get("input").type("master");
    cy.get("button").click();

    cy.wait("@fetchFromGithub");
    cy.get(".card").first().click();
    cy.wait("@fetchFromGithub");
    cy.get(".repo-info").find(".readme");
  });
});
