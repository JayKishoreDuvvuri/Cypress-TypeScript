import {
  languageDropDown,
  email,
  nextButton,
  password,
  signInButton,
  logo,
  searchBar,
  profilePic,
  password,
} from "../selectors/locators";

import {
  baseUrl,
  languageEN,
  emailTxt,
  passwordTxt,
  compose,
} from "../fixtures/testdata";

Cypress.Commands.add("login", () => {
  cy.visit("servicelogin");
  cy.get(languageDropDown).should("be.visible");
  cy.get(languageDropDown).click();
  cy.xpath(languageEN).click();

  // Google Login Redirection: Email Input
  cy.url()
    .should("contain", Cypress.env("url"))
    .wait(1000)
    .get(email)
    .click()
    .type(emailTxt)
    .get(nextButton, { timeout: 3000 })
    .click();

  // Google Login Redirection: Password Input
  cy.url()
    .should("contain", Cypress.env("url"))
    .get(password)
    .type(passwordTxt)
    .get(signInButton, { timeout: 3000 })
    .click();
});

Cypress.Commands.add(
  "sendAnEmail",
  (from: string, to: string, subject: string, emailMessage: string) => {
    cy.task("gmail:sendEmail", {
      from: from,
      to: to,
      subject: subject,
      emailMessage: emailMessage,
    }).then((response) => {
      response.forEach((item) => {
        expect(item.status).to.equal(200);
        expect(item.statusText).to.equal("OK");
      });
    });
  }
);

Cypress.Commands.add(
  "getMessages",
  (from: string, to: string, subject: string, bodyText: string) => {
    cy.task("gmail:get-messages", {
      from: from,
      to: to,
      subject: subject,
      bodyText: bodyText,
    }).then((response) => {
      expect(response).not.to.equal(null);
      expect(response).to.be.not.empty;
      return response;
    });
  }
);

Cypress.Commands.add(
  "sendEmailWithAttachments",
  (
    from: string,
    to: string,
    subject: string,
    emailMessage: string,
    attachments: any
  ) => {
    cy.task("gmail:sendEmailWithAttachments", {
      from: from,
      to: to,
      subject: subject,
      emailMessage: emailMessage,
      attachments: attachments,
    }).then((response) => {
      response.forEach((item) => {
        expect(item.status).to.equal(200);
        expect(item.statusText).to.equal("OK");
      });
    });
  }
);

Cypress.Commands.add("getAllEmails", (email: string) => {
  cy.task("gmail:get-all-emails", {
    email: email,
  }).then((response) => {
    console.log("All emails response:", response);
    expect(response).not.to.equal(null);
    expect(response).to.be.not.empty;
  });
});

Cypress.Commands.add(
  "getEmailsInTimeRange",
  (
    to: string,
    from: string,
    subject: string,
    before: string,
    after: string
  ) => {
    cy.task("gmail:get-messages", {
      to: to,
      options: {
        from: from,
        subject: subject,
        include_body: true,
        before: before,
        after: after,
      },
    }).then((response) => {
      expect(response).not.to.equal(null);
      return response;
    });
  }
);
