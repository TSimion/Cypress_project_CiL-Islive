

// In this test, a model logs in test.clubislive.dev env, on existing and approved account.
// The model starts a broadcast session, ends the session , and logs out of the account.

  xdescribe('test.clubislive model login and start broadcast test', () => {
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //   return false;
    // });

    it('720', () => {
      cy.viewport(1280, 720)
      cy.visit('https://test.clubislive.dev');
      cy.get(".selected").click();
      cy.get(':nth-child(1) > .block').click();
      cy.contains('Login').click();
      cy.get(':nth-child(1) > .switch');
      cy.get(':nth-child(5) > .relative > .rounded').type('101@islive.dev');
      cy.get(':nth-child(6) > .relative > .rounded').type('101@islive.dev{enter}');
      cy.get('.relative > .h-12').contains('Performer-jan');
      cy.get('.inline-flex').contains('Start broadcasting');
      cy.visit('https://test.clubislive.dev/en/broadcast');
      cy.get('.border-pink-s0').click();
      cy.get('.inline-flex').click();
      cy.wait(2000);
      //cy.contains("Session");
      cy.get('[id="mcPlayer"]').should('have.length', 1);
      cy.get(':nth-child(2) > .switch > .slider').click();
      cy.get('.bottom-0 > .flex-grow').type('automated message{enter}');
      cy.get('.h-full > .flex.text-gray-s0').click();
      // cy.get('.relative > .h-12').contains('Performer-jan').click();
      // cy.get('.dropdown > :nth-child(2)').contains('Logout').click();
      // cy.contains('close').click();

    

    })
    
  });






// PREREQUISITE - a model account should be in broadcast session.
// In this test, a member logs in an existing account, opens a model chat and, 
// sends messages (private and public), tips, custom tips, logs out of the account.
 
describe('test.islive member login test', () => {
  it('720', () => {
    cy.viewport(1280, 720)
    cy.visit('https://test.islive.dev')
    cy.get('.tw-inline-flex > span').click();
    cy.get(':nth-child(1) > .tw-block').click();
    cy.get(':nth-child(2) > span > .tw-inline-flex').click();
    cy.get('[name="email"]').type('redtud@islive.dev');
    cy.get('[name="password"]').type('redtud@islive.dev11{enter}');
    //cy.get('form > .tw-h-11').click();
    cy.get(':nth-child(1) > .tw-overflow-hidden.tw-absolute > .tw-relative > .tw-absolute').click();
    cy.wait(3000);
    cy.get('.tw-flex-wrap > .active').should('be.visible'); // private messagegin
    cy.get('.editor > .tw-flex-grow').type('hello from the member side');
    cy.get('[icon-only="true"] > .tw-w-4').click(); // message sent
    cy.wait(1000);
    cy.get('.tw-grid > :nth-child(1) > .trigger > .tw-flex').click(); // tips 1 sent
    cy.wait(1000);
    cy.get(':nth-child(2) > .trigger > .tw-flex').click(); // tips 2 sent
    cy.get('.tw-justify-around > .tw-select-none').type('100');
    cy.get('.trigger > .tw-text-white').click(); // sent custom tips
    cy.get('.tw-grid-flow-row > .tw-justify-between > .tw-flex-wrap > :nth-child(1)').should('be.visible').click(); //public messaging
    cy.get('.editor > .tw-flex-grow').type('hello from the member side');
    cy.get('[icon-only="true"] > .tw-w-4').click(); // message sent
    cy.wait(1000);
    cy.get('.tw-grid > :nth-child(1) > .trigger > .tw-flex').click(); // tips 1 sent
    cy.wait(1000);
    cy.get(':nth-child(2) > .trigger > .tw-flex').click(); // tips 2 sent
    cy.get('.tw-justify-around > .tw-select-none').type('100');
    cy.get('.trigger > .tw-text-white').click(); // sent custom tips    
    cy.contains('Redtud').click();
    cy.get('.tw-relative.tw-h-full > :nth-child(2) > .tw-absolute > :nth-child(10) > .listItem__btn').click();

  })
  
});




















