

// Work in progress:
// it needs that the 2 step authentification with google to be removed in order to test to work

describe('Check existing model is streace', () => {
    it('Check model in Streace', () => {
        cy.viewport(1280, 720)
        cy.visit('https://test.streace.dev/');
        cy.get('input[placeholder="username"]').type('tudor');
        cy.get('input[type="password"]').type('@Spring2023');
        //google authentification
        cy.get('input[placeholder="Google Auth Code"]').type('586507');
        cy.get('input[value="Login"]').click();

      




    })
    
  });