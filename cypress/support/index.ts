import { MailSlurp } from "mailslurp-client";

declare global {
    namespace Cypress {
        interface Chainable {
            mailslurp: () => Promise<MailSlurp>;
        }
    }
};


module.exports = (on) => {
  on('task', {
    getEmails: ({ apiKey }) => {
      const mailslurp = new MailSlurp({ apiKey });
      return mailslurp.waitForLatestEmail('inbox');
    },
  });
};
