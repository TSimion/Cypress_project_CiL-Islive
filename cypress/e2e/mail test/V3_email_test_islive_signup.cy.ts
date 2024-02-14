


import { faker } from '@faker-js/faker';
const randomName = faker.name.firstName(); // Ex: Rowan Nikolaus


const { MailSlurp } = require('mailslurp-client');

describe('Example Test Suite', () => {
    

    let finalLink;
  
    before(async () => {
      // Set up MailSlurp client with your API key
      const mailslurp = new MailSlurp ({ apiKey: 'b68171be7e9d31af5406532a574334e00c42d7bcc7eaec426f8779795955acd0' });
  
      // Generate a new email address
      const emailAddress = await mailslurp.createInbox()

       
      cy.viewport(1280, 720);
      cy.visit("https://test.islive.dev/")
      cy.title().should('contain', 'Islive.com');
      cy.get('button[class*="whitelabel-btn--primary"]').click();
      cy.get('[name="username"]').type(randomName); //This one should use random generation 
      cy.get("[name='email']").type(emailAddress.emailAddress).trigger('change');
      cy.get("[name=password]").type('test-password1').trigger('change');
      cy.get('[type="submit"]').click();
      cy.wait(2000);
      cy.get('button[class*="amClose__button"]').click({force: true});
  
  
      // Wait for the confirmation email to arrive
      const confirmationEmail = await mailslurp.waitForLatestEmail(emailAddress.id, { minCount: 1, timeoutMillis: 30000 });
  
      // Extract the confirmation link from the email
      const matches = confirmationEmail.body.match(/href="([^"]+)"/g);
      if (matches && matches.length >= 2) {
        finalLink = matches[1].replace(/&amp;|%|"|href="/g, '');
      } else {
        throw new Error('Second href link not found in the email');
      }
    });
  
    it('Test Step 1: Sign up and retrieve confirmation link', () => {
      // Assertions or further actions if needed
      expect(finalLink).to.not.be.undefined;
      cy.log('Confirmation link:', finalLink);
    });
  
    it('Test Step 2: Visit the confirmation link', () => {
      // Visit the confirmation link
      let trimmedLink = finalLink.replace(/&amp;|["%]/g, '');
      cy.log('Trimmed link:', trimmedLink);
      cy.visit(trimmedLink);
    });
  
    });
  

