// ### 1. Get all emails for the specific user tg0008993 in a time time range within 1 Month
// ### 2. Filter the criteria by subject and sender sa0008993@gmail.com

import * as users from "../fixtures/users.json";

const USER_SEND_EMAIL = users.senderEmail.email,
  USER_RECEIVE_EMAIL = users.receiverEmail.email,
  EMAIL_MESSAGE = `AUTO EMAIL SUBJECT`;

describe("Get all Emails for the users tg0008993@gmail.com and sa0008993@gmail.com", function () {
  it("Get all the emails for the user tg0008993@gmail.com from inbox", () => {
    cy.log("Get all emails for the user tg0008993@gmail.com");
    cy.getAllEmails(USER_RECEIVE_EMAIL);
  });

  it("Get all Emails during a specific period filtered by subject and sender for the user tg0008993@gmail.com ", () => {
    cy.log(
      "Get all emails in a specific time range for the user tg0008993@gmail.com"
    );
    cy.getEmailsInTimeRange(
      USER_RECEIVE_EMAIL,
      USER_SEND_EMAIL,
      EMAIL_MESSAGE,
      new Date(2021, 10, 15, 23, 31, 13), // Before September 22nd, 2021 23:59:59
      new Date(2022, 4, 24) // After April 24, 2022);
    );
  });

  it("Get all the emails for the user sa0008993@gmail.com from inbox", () => {
    cy.log("Get all emails for the user sa0008993@gmail.com");
    cy.getAllEmails(USER_SEND_EMAIL);
  });

  it("Get all Emails during a specific period filtered by subject and sender for the user sa0008993@gmail.com ", () => {
    cy.log(
      "Get all emails in a specific time range for the user sa0008993@gmail.com"
    );
    cy.getEmailsInTimeRange(
      USER_SEND_EMAIL,
      USER_RECEIVE_EMAIL,
      EMAIL_MESSAGE,
      new Date(2021, 10, 15, 23, 31, 13), // Before September 22nd, 2021 23:59:59
      new Date(2022, 4, 24) // After April 24, 2022);
    );
  });
});
