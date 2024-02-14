Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('test.clubislive existing Studio model login', () => {
    it('720', () => {
      cy.viewport(1280, 720)
      cy.visit('https://test.clubislive.dev');
      cy.get(".selected").click();
      cy.get(':nth-child(1) > .block').click();
      cy.get('button[type="button"]').contains('Login').click();
      cy.get(':nth-child(1) > .switch');
      cy.get('[name="nameEmail"]').type('101@islive.dev');
      cy.get('[name="password"]').type('101@islive.dev');
      cy.get('button[type="button"]').eq(7).contains('Login as model').click();
      cy.get('div[class*="h-12"]').contains('Performer-jan');
      cy.contains('Earnings').click();
      cy.get('p[class="ml-4"]').contains('Messenger').click();
      cy.get('p[class="ml-4"]').contains('News').click();
      cy.get('p[class="ml-4"]').contains('Profile').click();
      cy.get('p[class="ml-4"]').contains('Home').click();
      cy.get('p[class="pl-1.5 text-sm"] ').contains('Verified account');

    })
    
  });

  // to validate that is a studio model, we confirm that the dashboard menu contans only:
  // Home, Earnings, Messenger, News, Profile

