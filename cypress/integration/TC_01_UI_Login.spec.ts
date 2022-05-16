// ### 1. Login to accounts.google.com
// ### 2. Open Cypress test runner and select chrome browser
// ### 3. Run the test login.spec.ts
// ### 4. User will login to accounts.google.com successfully
// ### 5. User is landed succesfully on the Google account - Home page

describe("Login to Google Account", () => {
  it("Login", () => {
    cy.login();
  });
});
