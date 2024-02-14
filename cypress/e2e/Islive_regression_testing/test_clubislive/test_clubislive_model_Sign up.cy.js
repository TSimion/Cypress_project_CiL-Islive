

import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz



describe('test.clubislive model Sign up test', () => {
    it('Model Sign up', () => {
      cy.viewport(1280, 720)
      cy.visit('https://test.clubislive.dev');
      cy.get(".selected").click();
      cy.get(':nth-child(1) > .block').click();
      cy.contains('Join us').click();
      cy.get(':nth-child(1) > .switch').click();  
      cy.get('[name="email"]').type(randomName).type('@islive.dev');
      cy.get('[name="password"]').type('SuperSecret1');
      cy.get('[name="password2"]').type('SuperSecret1');
      cy.get('[type="submit"]').click();
      cy.get('.w-full.text-center > .inline-flex').click();
      // the Verify email should be sent. Check the email.

  
    })
    
  });





console.table(randomName); // open console test and see the name randome created
