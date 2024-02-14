
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

    cy.task('getEmails', { apiKey: "b68171be7e9d31af5406532a574334e00c42d7bcc7eaec426f8779795955acd0" }).then((emails) => {
        const verificationEmail = emails.find((email) =>
          email.subject.includes('Account Verification')
        );
        const verificationLink = verificationEmail.body.match(/href="([^"]+)"/)[1];
  
        // Visit the verification link
        cy.visit(verificationLink);

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

});
















