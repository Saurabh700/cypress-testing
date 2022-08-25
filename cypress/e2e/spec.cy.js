/// <reference types="Cypress" />
// add above line to get suggestions

// Intercept is not going to work on react browser because react browser is not working with cypress --> so we have to use the browser that cypress provides to see this behaviour

describe("Checking Counter Application", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  beforeAll(() => {
    // websockets -> create Connection
  });

  afterAll(() => {
    // websockets -> break Connection
  });

  afterEach(() => {
    // clean up -> reset the application
  });

  // similarly we can use beforeAll & afterAll & afterEach

  // using json-server

  // CONCEPT OF INTERCEPT
  // isse yeh hoga ki bhale hi server jo bhi req bheje but cypress dom par 100 hi show karega
  // this is the concept of intercept to check if url and request is correct or not because if req is made to this particular url only then it will show 100 to dom so that i can create test case accordingly-> qki in testcase i need to hardcode the data--> generally used for testing purpose so that the data stored on server will remain safe --> if we are testing delete req then it will tell us that the request is correct without deleting any data

  it("should intercept the get request", () => {
    // cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:8080/count", { value: 100 }).as(
      "getReq"
    );
    cy.wait("@getReq").should((data) => {
      console.log("data from cypress", data);
    });
  });

  it("should intercept the post request", () => {
    // cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:8080/count", { value: 2 }).as(
      "getReq"
    );
    cy.intercept("POST", "http://localhost:8080/count", {
      fixture: "counter",
    }).as("postReq");
    cy.wait("@getReq");
    cy.get(".addCount").click();
    cy.wait("@postReq");

    cy.get("h1").should("have.text", "Counter:100");
  });

  // using simple useState()

  // it("checking if counter application is present", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h1").should("exist");
  //   cy.get(".addCount").should("exist"); // since addCount is a class so we can directly access it using .
  //   cy.get(".reduceCount").should("exist");
  // });

  // // for every test case we should start from scratch to reset all setStates thats why visit localhost everytime in every testcase so that everytest case will become independent
  // it("should increment counter", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h1").should("have.text", "Counter:0");

  //   cy.get(".addCount").click();

  //   cy.get("h1").should("have.text", "Counter:1");
  // });

  // it("should increment counter three times", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.get("h1").should("have.text", "Counter:0");

  //   cy.get(".addCount").click();
  //   cy.get(".addCount").click();
  //   cy.get(".addCount").click();

  //   cy.get("h1").should("have.text", "Counter:3");
  // });
});

// if cy appears as undefined then create a .eslinctrc.json
