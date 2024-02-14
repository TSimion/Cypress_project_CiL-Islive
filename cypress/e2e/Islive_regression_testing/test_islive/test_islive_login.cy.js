

describe('test.islive login test', () => {
    it('Login and Log out Member', () => {
      cy.viewport(1280, 720)
      cy.visit('test.islive.dev')
      //cy.get(':nth-child(2) > span > .whitelabel-btn').click();
      cy.get('button[class*="whitelabel-btn"]').eq(1).click();
      cy.get('[name="email"]').type('friday');
      cy.get('[name="password"]').type('friday1@islive.dev1');
      cy.get('[type="submit"]').click();
      cy.get('.tw-relative.tw-h-full > :nth-child(2) > .tw-h-full').contains('Friday');

      // Log out Member

      cy.get('button[class*="whitelabel-btn"]').eq(2).click({force: true});
      cy.get('span[class*="tw-text-black"]').eq(1).click({force: true});
      cy.get('button[class*="whitelabel-btn"]').eq(1).contains('Login');
      

    })
    
  });

