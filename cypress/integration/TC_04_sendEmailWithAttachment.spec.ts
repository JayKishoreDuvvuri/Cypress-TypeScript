// ### 1. User sa0008993@gmail.com sends an email with attachment of an image to user tg0008993@gmail.com
// ### 2.User sa0008993@gmail.com sends an email with attachment successfully

import * as users from "../fixtures/users.json";

let Chance = require("chance");

const USER_SEND_EMAIL = users.senderEmail.email,
  USER_RECEIVE_EMAIL = users.receiverEmail.email,
  EMAIL_MESSAGE = `AUTO EMAIL MESSAGE ${Chance().timestamp()}`,
  EMAIL_SUBJECT = `AUTO EMAIL SUBJECT ${Chance().timestamp()}`,
  IMAGE_URL = Cypress.env("imageLocation"),
  FOLDER_NAME = Cypress.env("downloadFolder"),
  PATH = `cypress/fixtures/${FOLDER_NAME}`,
  FILE_NAME = "User.png";

describe("Sending email attachement from user sa0008993@gmail.com", () => {
  before(function () {
    cy.log("Picture is loaded..!");
    cy.downloadFile(IMAGE_URL, PATH, FILE_NAME);
  });

  it("Send email attachment from sa0008993@gmail.com to another user tg0008993@gmail.com", () => {
    cy.log("User sa0008993 sends email with attachment to tg0008993");
    cy.log(`Email from ${USER_SEND_EMAIL} to ${USER_RECEIVE_EMAIL}`);
    cy.log(`Email subject is ${EMAIL_SUBJECT}`);
    cy.log(`Email message is ${EMAIL_MESSAGE}`);

    cy.fixture(`${FOLDER_NAME}/${FILE_NAME}`).then((image) => {
      let attachments = [
        {
          filename: FILE_NAME,
          content: image,
          encoding: "base64",
        },
      ];
      cy.sendEmailWithAttachments(
        USER_SEND_EMAIL,
        USER_RECEIVE_EMAIL,
        EMAIL_SUBJECT,
        EMAIL_MESSAGE,
        attachments
      );
    });

    cy.log("Sending Email with Attachment is successfull...!");
  });
});
