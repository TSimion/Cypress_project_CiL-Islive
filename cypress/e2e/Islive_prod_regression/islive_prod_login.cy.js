


describe('prod.islive login test', () => {
    it('720', () => {
      cy.viewport(1280, 720)
      cy.visit('https://islive.com')
      cy.get('.tw-inline-flex > span').click();
      cy.get(':nth-child(1) > .tw-block').click();
      cy.get(':nth-child(2) > span > .tw-inline-flex').click();
      cy.get('[name="email"]').type('redtud');
      cy.get('[name="password"]').type('@Redtud123');
      cy.get('[type="submit"]').click();
    })
    
  });