describe('staging.islive login test', () => {
    it('720', () => {
      cy.viewport(1280, 720)
      cy.visit('https://staging.islive.dev')
      cy.get('.tw-inline-flex > span').click();
      cy.get(':nth-child(1) > .tw-block').click();
      cy.get(':nth-child(2) > span > .tw-inline-flex').click();
      cy.get('[name="email"]').type('Redguy');
      cy.get('[name="password"]').type('redguy@islive.dev1');
      cy.get('[type="submit"]').click();
    })
    
  });