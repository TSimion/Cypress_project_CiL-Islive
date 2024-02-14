
import { faker } from '@faker-js/faker';
const randomName = faker.name.firstName(); // Ex: Rowan Nikolaus


// use cypress-mailslurp plugin to create an email address before test
before(function () {
    cy.log("Wrap inbox before test")
    return cy.mailslurp()
        .then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
            cy.log(`Inbox id ${inbox.id}`)
            // save inbox id and email address to this (make sure you use function and not arrow syntax)
            cy.wrap(inbox.id).as('inboxId')
            cy.wrap(inbox.emailAddress).as('emailAddress')
        })
});

it("01 - can load the demo application", function () {
    // get wrapped email address and assert contains a mailslurp email address
    cy.viewport(1280, 720);
    expect(this.emailAddress).to.contain("@mailslurp");
    // visit the demo application
    cy.visit("https://test.islive.dev/")
    cy.title().should('contain', 'Islive.com');
    //fill the form 
    cy.get('button[class*="whitelabel-btn--primary"]').click();
//   // use the email address and a test password
    cy.get('[name="username"]').type(randomName);
    cy.get("[name='email']").type(this.emailAddress).trigger('change');
    cy.get("[name=password]").type('test-password1').trigger('change');
//     // click the submit button
//   
    cy.get('[type="submit"]').click();
    cy.wait(2000);
    cy.get('button[class*="amClose__button"]').click({force: true});
    cy.get('button[class*="whitelabel-btn"]').eq(2).contains(randomName);

    //can receive confirmation code by email
    //app will send user an email containing a code, use mailslurp to wait for the latest email

    cy.mailslurp()
        // use inbox id and a timeout of 30 seconds
        .then(mailslurp => mailslurp.waitForLatestEmail(this.inboxId, 30000, true))
        // extract the confirmation code from the email body
        .then((email) => {
            // Get the email body
            const emailBody = email.body;
            // Log or assert the email body
            cy.log('Email Body:', emailBody);

            cy.get(emailBody).invoke('html').then((bodyHTML) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(bodyHTML, 'text/html');
                cy.log('textValue', doc)
                // Get all <a> elements in the body
                const anchorElements = doc.querySelectorAll('a');
                cy.log('extractedValue', anchorElements);
                // Extract href values from the <a> elements
                const hrefs = Array.from(anchorElements).map((element) => element.getAttribute('href'));
                // Log the extracted href values
                console.log('Extracted href values:', hrefs);
            });

           
          })
        // fill out the confirmation form and submit
        //describe('Email Testing', () => {
           // it('should retrieve the href link from the email body', () => {
            //   cy.request({
            //     method: 'GET',
            //     url: 'emailBody',
            //   })
        
        .then(response => {
            const hrefRegex = /<a\s+(?:[^>]*?\s+)?href=([“’])(.*?)\1/;
           // const matches = response.body.match(hrefRegex);
            //const href = matches ? matches[2] : null;
           // cy.log('Retrieved href:', href);
            //cy.get("[name=code]").type(code).trigger('change');
            //cy.get("[data-test=confirm-sign-up-confirm-button]").click();
        })

        //can sign in with confirmed account
        // use the email address and a test password

//     cy.get("[data-test=username-input]").type(this.emailAddress).trigger('change');
//     cy.get("[data-test=sign-in-password-input]").type('test-password').trigger('change');
//     // click the submit button
//     cy.get("[data-test=sign-in-sign-in-button]").click();

//     // can see authorized welcome screen
//    // click sign up and fill out the form
//    cy.get("h1").should("contain", "Welcome");


});



        









