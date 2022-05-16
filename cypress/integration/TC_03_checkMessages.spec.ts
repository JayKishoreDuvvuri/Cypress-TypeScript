// ### 1. Validate the email messages for the receiver - User tg0008993@gmail.com
// ### 2. Assert the email messages for the user to not to be null
// ### 3. Assert the email messages for the user to not to be empty
// ### 4. List the count of messages as an array as an output in assertion

import * as users from "../fixtures/users.json";

const USER_SEND_EMAIL = users.senderEmail.email,
  USER_RECEIVE_EMAIL = users.receiverEmail.email;

describe("Check user tg0008993@gmail.com messages count", function () {
  it("Check email messages", () => {
    cy.log("Count of messages to the receiver tg0008993@gmail.com");
    cy.log(
      "Assert the message count to see whether messages count in an array are correct!"
    );
    cy.getMessages(
      USER_SEND_EMAIL,
      USER_RECEIVE_EMAIL,
      "AUTO EMAIL SUBJECT 980215233",
      "AUTO EMAIL MESSAGE 44685303"
    );
    cy.log("Messages are validated and are correct!");
  });
});
