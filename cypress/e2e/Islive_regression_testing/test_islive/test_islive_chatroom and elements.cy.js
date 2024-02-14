
// work in progress, needs selectors to be added

describe('test.islive buy credits', () => {
    it('Member add credits bundle', () => {
      cy.viewport(1280, 720)
      cy.visit('test.islive.dev')
      cy.get(':nth-child(2) > span > .whitelabel-btn').click();
      cy.get('[name="email"]').type('friday');
      cy.get('[name="password"]').type('friday1@islive.dev1');
      cy.get('[type="submit"]').click();
      cy.get('div[class="tw-h-full"]').contains('Friday').click();
      cy.get('button[type="button"]').contains('Add credits').click();
      cy.get('.tw-flex-col > :nth-child(1) > .tw-border-4').click();
      cy.get('.tw-border-secondary > .tw-flex').click();
      cy.get('button[class*="tw-mt-4"]').click();
      //need to be able to handle multiple pages, work in progress
      cy.get('input[id="token-input"]').type('1e6f03ba53f2f41e57ebd6d22281ea06bbc7214a');
 



    })

      // Access Broadcast and verify element to be present

      it.only('Enter model broadcast, send tips and check elements', () => {
        cy.viewport(1280, 720)
        cy.visit('test.islive.dev')
        cy.get(':nth-child(2) > span > .whitelabel-btn').click();
        cy.get('[name="email"]').type('friday');
        cy.get('[name="password"]').type('friday1@islive.dev1');
        cy.get('[type="submit"]').click();
        cy.get('div[class="tw-h-full"]').contains('Friday');
        //Accesing model chatroom
        cy.get('div[class*="tw-top-0"]').contains('Orangemodel').click({ force: true });
        cy.wait(10000);
        // //Validating elements in broadcasting window
        // cy.get('h1').contains('orangemodel');
        //Sending Private chat tips and message
        cy.get('.tw-flex-wrap > .active').contains('Private');
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(1)').click();
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(2)').click();
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(3)').click();
        cy.get('input[placeholder="1500"]').type('100');
        cy.get('div[class="v-popover tipBtn"]').click();
        cy.get('input[name="chat-editor"]').type('Private message autotest',  {force: true});
        cy.get('button[icon-only="true"]').click();
        //Sending Public chat tips and message
        cy.get('.tw-flex-wrap > :nth-child(1)').contains('Public').click({force: true});
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(1)').click();
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(2)').click();
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(3)').click();
        cy.get('input[placeholder="1500"]').clear().type('100');
        cy.get('div[class="v-popover tipBtn"]').click();
        cy.get('input[name="chat-editor"]').type('Public message autotest',  {force: true});
        cy.get('button[icon-only="true"]').click();
        //VIP, needs manual imput to accept the VIP from member
        cy.get('li[class*="chatList__tab vip"]').click();
        cy.get('button[type="button"]').contains('Continue').click();
        cy.wait(10000);
        //Confirmation that model accepted the VIP
        cy.get('div[class*="systemMessage"]').contains('Orangemodel accepted your 1-on-1 VIP request');
        cy.get('li[class*="chatList__tab vip"]').contains('1-on-1 VIP').click({force: true});
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(1)').click();
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(2)').click();
        cy.get('div[class="v-popover tipBtnPopover"]:nth-child(3)').click();
        cy.get('input[placeholder="1500"]').clear().type('100');
        cy.get('div[class="v-popover tipBtn"]').click();
        cy.get('input[name="chat-editor"]').type('VIP message autotest',  {force: true});
        cy.get('button[icon-only="true"]').click();
        //Ending VIP
        cy.get('button[type="button"]').contains('End VIP').click();
        //Confirmation of VIP stopped
        //cy.get('span').contains('1-on-1 VIP chat stopped!')
        cy.get(':nth-child(8) > [data-v-5f188a54=""] > .systemMessage > div > :nth-child(1)').contains('1-on-1 VIP chat stopped!')
        //Back to all models, home page
        cy.get('a[class*="navpill"]').contains('Back to models').click();
        cy.get('a[class*="navpill"]').contains('All');
        cy.get('a[class*="navpill"]').contains('New');
        cy.get('a[class*="navpill"]').contains('Toy shows');
        cy.get('a[class*="navpill"]').contains('Favourites');
 
  
      })

  
});











