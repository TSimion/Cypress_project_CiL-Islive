



describe('Check existing model is streace', () => {
    it('720', () => {
        cy.viewport(1280, 720)
        cy.visit('https://test.streace.dev/');
        cy.get('input[placeholder="username"]').type('tudor');
        cy.get('input[type="password"]').type('@Spring2023');
        cy.get('input[placeholder="Google Auth Code"]').type('586507');
        cy.get('input[value="Login"]').click();

      




    })
    
  });