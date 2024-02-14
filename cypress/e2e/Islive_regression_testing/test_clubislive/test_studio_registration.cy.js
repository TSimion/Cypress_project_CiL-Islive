

import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
console.table(randomName); // open console test and see the name randome created


describe('test.clubislive model Sign up test', () => {
    it('Model Sign up', () => {
      cy.viewport(1280, 720)
      cy.visit('https://test.clubislive.dev');


  
    })
    
  });






