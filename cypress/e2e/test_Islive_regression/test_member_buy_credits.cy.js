

describe('test.islive buy credits', () => {
    it('720', () => {
      cy.viewport(1280, 720)
      cy.visit('test.islive.dev')
      cy.get(':nth-child(2) > span > .whitelabel-btn').click();
      cy.get('[name="email"]').type('friday');
      cy.get('[name="password"]').type('friday1@islive.dev1');
      cy.get('[type="submit"]').click();
      cy.get('div[class="tw-h-full"]').contains('Friday').click();
      cy.get('button[type="button"]').contains('Add credits').click();
      // cy.get('div[class*="tw-font-sans"]').contains('MINI').click();
      // cy.get('.tw-border-secondary > .tw-flex').click();
      // cy.get('div.tw-w-full > .tw-relative > .tw-justify-between').click();
      // cy.get('.tw-bg-custom5-s18 > .tw-flex').contains('ING').click();
      // cy.get('.tw-shadow-inner > .tw-inline-flex').click();
      






    })
    
});

