const path = require("path");
const gmail = require("gmail-tester-extended");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

const POLL_INTERVAL = 5;
const MAX_POLL_INTERVAL = 20;

function getCredentials(email) {
  return path.resolve(__dirname, `credentials-${getLogin(email)}.json`);
}

function getToken(email) {
  return path.resolve(__dirname, `gmail_token-${getLogin(email)}.json`);
}

function getLogin(email) {
  let array = email.split("@");
  return array[0];
}

module.exports = (on, config) => {
  on("task", {
    "gmail:get-all-emails": async (args) => {
      const { email } = args;
      const allEmails = await gmail.get_messages(
        await getCredentials(email),
        await getToken(email),
        POLL_INTERVAL,
        MAX_POLL_INTERVAL
      );
      return allEmails;
    },
  });

  on("task", {
    "gmail:sendEmail": async (args) => {
      const { from, to, subject, emailMessage } = args;
      const response = await gmail.send_email(
        await getCredentials(from),
        await getToken(from),
        subject,
        from,
        to,
        emailMessage,
        POLL_INTERVAL,
        MAX_POLL_INTERVAL
      );
      return response;
    },
  });

  on("task", {
    "gmail:sendEmailWithAttachments": async (args) => {
      const { from, to, subject, emailMessage, attachments } = args;
      const response = await gmail.send_email_with_attachments(
        await getCredentials(from),
        await getToken(from),
        subject,
        from,
        to,
        emailMessage,
        attachments,
        POLL_INTERVAL,
        MAX_POLL_INTERVAL
      );
      if (response) {
        console.log("Sending email attachment is successfull...!!!");
      } else {
        console.log("Sending email attachment failed...!!!");
      }
      return response;
    },
  });

  on("task", {
    "gmail:get-messages": async (args) => {
      const messages = await gmail.get_messages(
        await getCredentials(args.to),
        await getToken(args.to),
        args.options
      );
      return messages;
    },
  });

  on("task", {
    downloadFile,
  });
};
