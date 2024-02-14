


import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName(); // Rowan
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

describe('staging.islive Sign Up', () => {
  it('720', () => {
    cy.viewport(1280, 720)
    cy.visit('https://staging.islive.dev')
    cy.get(':nth-child(3) > span > .tw-inline-flex').click();
    cy.get(':nth-child(2) > .tw-relative > .tw-bg-transparent').type(randomName);
    cy.get(':nth-child(2) > .tw-relative > .tw-bg-transparent').type(randomEmail);
    cy.get(':nth-child(4) > .tw-relative > .tw-bg-transparent').type('SuperSecret1');
    cy.get('form > .tw-h-11').click();
    cy.get('.amClose__button > .tw-text-white > path').click()
    
  })
  
})
