

import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName(); // Ex: Rowan Nikolaus
const randomEmail = faker.internet.email(); // Ex: Kassandra.Haley@erich.biz


// Sign-up Memeber 

describe('test.islive Sign Up and login in same flow', () => {
  it('Sign-up Memeber', () => {
    cy.viewport(1280, 720)
    cy.visit('test.islive.dev')
    cy.get('button[class*="whitelabel-btn--primary"]').click();
    cy.get('[name="username"]').type(randomName);
    cy.get('[name="email"]').type(randomEmail);
    cy.get('[name="password"]').type('SuperSecret1');
    cy.get('[type="submit"]').click();
    cy.wait(2000);
    cy.get('button[class*="amClose__button"]').click({force: true});
    cy.get('button[class*="whitelabel-btn"]').eq(2).contains(randomName);

        // Log out Member

    cy.get('button[class*="whitelabel-btn"]').eq(2).click({force: true});
    cy.get('span[class*="tw-text-black"]').eq(1).click({force: true});
    cy.get('button[class*="whitelabel-btn"]').eq(1).contains('Login');

  })

  //Login Member and Log out Member

  it('Login Member and Log out Member', () => {
    cy.viewport(1280, 720)
    cy.visit('test.islive.dev')
    cy.get('button[class*="whitelabel-btn"]').eq(1).click();
    cy.get('[name="email"]').type(randomName);
    cy.get('[name="password"]').type('SuperSecret1');
    cy.get('[type="submit"]').click();
    cy.get('.tw-relative.tw-h-full > :nth-child(2) > .tw-px-3').contains(randomName);
  
      // Log out Member
  
    cy.get('button[class*="whitelabel-btn"]').eq(2).click({force: true});
    cy.get('span[class*="tw-text-black"]').eq(1).click({force: true});
    cy.get('button[class*="whitelabel-btn"]').eq(1).contains('Login');
  
    })
  
})

