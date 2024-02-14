

describe('test.islive login test', () => {
    it('720', () => {
      cy.viewport(1280, 720)
      cy.visit('test.islive.dev')
      //cy.get(':nth-child(2) > span > .whitelabel-btn').click();
      cy.get('button[class*="whitelabel-btn"]').eq(1).click();
      cy.get('[name="email"]').type('friday');
      cy.get('[name="password"]').type('friday1@islive.dev1');
      cy.get('[type="submit"]').click();
      cy.get('button[class*="whitelabel-btn"]').eq(2).contains('Friday');

      // Log out Member ceva iun plus

      cy.get('button[class*="whitelabel-btn"]').eq(2).click({force: true});
      cy.get('span[class*="tw-text-black"]').eq(1).click({force: true});
      cy.get('button[class*="whitelabel-btn"]').eq(1).contains('Login');
      

    })
    
  });

