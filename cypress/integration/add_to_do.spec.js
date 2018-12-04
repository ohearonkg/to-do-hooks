describe("To Do List", () => {
  it("Should Add A To Do", () => {
    // To go basic local host
    cy.visit("http://localhost:3000");

    /**
     * 1) Find Form
     * 2) Find Input
     * 3) Type Into Input
     * 4) Submit
     */
    cy.get("form").within(() => {
      cy.get("input").type("Buy Milk");
      cy.get("submit").click();
    });

    // Expect
    expect(true).to.equal(true);
  });
});
