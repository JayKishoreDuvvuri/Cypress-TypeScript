import "./common.cmd";
require("cypress-xpath");
require("cypress-downloadfile/lib/downloadFileCommand");
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
