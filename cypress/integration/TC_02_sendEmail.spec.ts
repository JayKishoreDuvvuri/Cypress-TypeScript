// ### 1. User sa0008993@gmail.com sends an email to user tg0008993@gmail.com
// ### 2. User sa0008993 sends email with Auto Email subject and message
// ### 3. User sa0008993 sends email with Auto Email Subject and Message to user tg0008993 successfully

import * as users from "../fixtures/users.json";

let Chance = require("chance");

const USER_SEND_EMAIL = users.senderEmail.email,
  USER_RECEIVE_EMAIL = users.receiverEmail.email,
  EMAIL_MESSAGE = `AUTO EMAIL MESSAGE ${Chance().timestamp()}`,
  EMAIL_SUBJECT = `AUTO EMAIL SUBJECT ${Chance().timestamp()}`;

describe("Sending email - Google API", () => {
  it("User sends an email from one account to another account", () => {
    cy.log(
      "User sa0008993 sends email from his gmail to another gmail user tg0008993"
    );
    cy.log(`Email from ${USER_SEND_EMAIL} to ${USER_RECEIVE_EMAIL}`);
    cy.log(`Email subject is ${EMAIL_SUBJECT}`);
    cy.log(`Email message is ${EMAIL_MESSAGE}`);
    cy.sendAnEmail(
      USER_SEND_EMAIL,
      USER_RECEIVE_EMAIL,
      EMAIL_SUBJECT,
      EMAIL_MESSAGE
    );
  });
});
