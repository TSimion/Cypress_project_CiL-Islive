

import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName(); // Ex: Rowan Nikolaus
const randomEmail = faker.internet.email(); // Ex: Kassandra.Haley@erich.biz


// Register and Login with the same credentials

describe('test.islive Sign Up and loging in same flow', () => {
  it('720', () => {
    cy.viewport(1280, 720)
    cy.visit('test.islive.dev')
    cy.get('button[class*="tw-inline-flex"]').eq(2).click();
    cy.get('[name="username"]').type(randomName);
    cy.get('[name="email"]').type(randomEmail);
    cy.get('[name="password"]').type('SuperSecret1');
    cy.get('[type="submit"]').click();
    cy.get('button[class*="whitelabel-btn"]').eq(2).contains(randomName);
    cy.wait(2000);
    cy.get('button[class*="amClose__button"]').click({force: true});
    cy.get('button[class*="whitelabel-btn"]').eq(2).contains(randomName);

    
    // Log out Member

    cy.get('button[class*="whitelabel-btn"]').eq(2).click({force: true});
    cy.get('span[class*="tw-text-black"]').eq(1).click({force: true});
    cy.get('button[class*="whitelabel-btn"]').eq(1).contains('Login');
    

    //Login Member

    cy.get('button[class*="whitelabel-btn"]').eq(1).click();
    cy.get('[name="email"]').type(randomName);
    cy.get('[name="password"]').type('SuperSecret1');
    cy.get('[type="submit"]').click();
    cy.get('button[class*="whitelabel-btn"]').eq(2).contains(randomName);

    // Log out Member

    cy.get('button[class*="whitelabel-btn"]').eq(2).click({force: true});
    cy.get('span[class*="tw-text-black"]').eq(1).click({force: true});
    cy.get('button[class*="whitelabel-btn"]').eq(1).contains('Login');

  })
  
})

