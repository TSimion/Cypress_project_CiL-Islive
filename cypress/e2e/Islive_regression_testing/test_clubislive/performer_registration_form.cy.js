Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})




import { faker } from '@faker-js/faker';

const randomName = faker.name.firstName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomNumber = faker.number.int({ min: 18, max: 99 }) // 57



describe('test.clubislive model Sign up and continues with registration flow', () => {
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

      // work in progress, Get email link to verify and continue the registration flow
    cy.wait(30000); // go to email client and Verify the email


  });
      
 

      // cy.get('button[type="button"]').contains('Login').click();
      // cy.get('[name="nameEmail"]').type(randomName).type('@islive.dev');
      // cy.get('[name="password"]').type('SuperSecret1');
      // cy.get('button[type="button"]').contains('Login as model').click();
      // cy.get('div[class*="leading-error"]').contains('Your email address has not yet been verified');
     
      it('model registration flow, step 1 ', () => {
        cy.viewport(1280, 720)
        cy.visit('https://test.clubislive.dev/en');
        cy.get('button[type="button"]').contains('Login').click();
        cy.get('h2[class*="leading-9"]').contains('Select your account type');
        cy.get('li[role="presentation"]').contains('Model Account').click();
        cy.get('[name="nameEmail"]').type(randomName).type('@islive.dev');
        cy.get('[name="password"]').type('SuperSecret1');
        cy.contains('Login as model').click();
        cy.contains('Continue registration').click();
        //upload cover photo
        cy.get('button[cy-data="openModalBtn"]').contains('Upload cover image').click();
        cy.get('.w-48').contains('Upload').selectFile('cover_image.jpg', { action: 'drag-drop' });
        cy.wait(2000);
        cy.get('[cy-data="saveCroppedBtn"]').click();
        //upload Soft Photo
        cy.get('[cy-data="softImageInput"] [cy-data="openModalBtn"]').click();
        cy.get('label[cy-data="uploadPictureBtn"]').selectFile('soft_image.jpg', { force: true });
        cy.wait(2000);
        cy.get('[cy-data="saveCroppedBtn"]').click({force: true});
        cy.get('[cy-data="saveImageBtn"]').click();
        //upload Sexy Photo
        cy.get('[cy-data="sexyImageInput"] [cy-data="openModalBtn"]').click();
        cy.get('label[cy-data="uploadPictureBtn"]').selectFile('sexy_image.jpg', { force: true });
        cy.wait(2000);
        cy.get('[cy-data="saveCroppedBtn"]').click({force: true});
        cy.get('[cy-data="saveImageBtn"]').click();
        //create model name & add Bio text
        cy.get('input[placeholder="Create your model name"]').type(randomName).type(randomNumber);
        cy.get('[cy-data="showBioBtn"]').click({force: true})
        cy.get('[cy-data="bioTa"]').type('bio text');
        cy.get('[cy-data="saveBioBtn"]').click();
        //fill model dropdowns
        cy.get('[cy-data="eyeColorSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Blue').click();
        cy.get('[cy-data="hairColorSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Blonde').click();
        cy.get('[cy-data="physiqueSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Slim').click();
        cy.get('[cy-data="breastSizeSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Size A').click();
        cy.get('[cy-data="shavedSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Short').click();
        cy.get('[cy-data="sexualPreferenceSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Straight').click();
        cy.get('[cy-data="relationshipSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Yes').click();
        cy.get('[cy-data="ethnicitySelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('Latin').click();
        cy.get('[cy-data="piercingsSelect"] [type="button"]').click({force: true});
        cy.get('[cy-data="piercingsSelect"] > .relative > .absolute > :nth-child(1) > .flex').click();
        cy.get('[cy-data="tattooSelect"] [type="button"]').click({force: true});
        cy.get('[cy-data="tattooSelect"] > .relative > .absolute > :nth-child(2) > .flex').click();
        cy.get('[cy-data="languagesSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('English').click();
        cy.get('[cy-data="locationSelect"]').type('Ams');
        cy.get('[cy-data="locationSelect"] > .relative > .absolute > :nth-child(1)').contains('Amsterdam, Netherlands').click();
        cy.get('[cy-data="showTypeSelect"] [type="button"]').click({force: true});
        cy.get('li[class*="select-none"]').contains('BDSM').click();
        cy.get('[role="tabpanel"]').click({force: true}); //click the page to close My shows menu
        cy.get('button[class*="button"]').click();
        cy.wait(20000)

        //Step 2 registration
        cy.get('a[role="tab"]').contains('Personal details');
        cy.get('input[name="first-name"]').type('Brenda');
        cy.get('input[name="sur-name"]').type('Green');
        cy.get('input[name="date-of-birth"]').type('11111999');
        cy.get('button[type="button"]').contains('Select').click();
        cy.get('div[class="flex items-center space-x-2"]').contains('Albania').click();
        cy.get('input[name="address1"]').type('address1');
        cy.get('input[name="address2"]').type('address1');
        cy.get('input[name="zipcode"]').type('125436');
        cy.get('[cy-data="locationSelect2"]').type('ams');
        cy.get('[cy-data="locationSelect2"] > .relative > .absolute > :nth-child(1)').contains('Amsterdam, Netherlands').click();
        cy.get('div[class="flex relative w-full"]').contains('Choose type of identification').click();
        cy.get('div[class="flex items-center space-x-2"]').contains('ID Card').click();
        cy.get('input[name="id-snn"]').type('7558ETR');
        cy.get('input[name="id-expire-date"]').type('11112222');
        //upload front ID
        cy.get('.py-3').contains('Upload').selectFile('cover_image.jpg', { action: 'drag-drop' });
        cy.wait(2000);
        cy.get('[cy-data="saveCroppedBtn"]').click();
        // upload back ID
        cy.get('[cy-data="uploadIdBack"]').selectFile('sexy_image.jpg', { force: true });
        cy.wait(2000);
        cy.get('[cy-data="saveCroppedBtn"]').click();
        // upload face ID
        cy.get('[cy-data="uploadIdWithFace"]').selectFile('soft_image.jpg', { force: true });
        cy.wait(2000);
        cy.get('[cy-data="saveCroppedBtn"]').click();
        cy.get('button[type="submit"]').click();
        //validating final step of the registration
        cy.get('h1[class*="hidden"]').contains('Thank you');
        cy.wait(1000)
        cy.get('button.cursor-pointer').should('be.visible').click({force:true});
        cy.wait(1000);
        //Model is taken back to the home page
        cy.get('h1[class*="title"]').contains('Join ')
      
                
    
      })
      
 
    });
    





  // // The registration flow after the email link verification
  // describe('cod doar sa faca partea de registration flow, pentru a fi atasat ulterior in testul de mai sus', () => {
  //   it('model registration flow, step 1 & 2', () => {
  //     cy.viewport(1280, 720)
  //     cy.visit('https://test.clubislive.dev/en');
  //     cy.get('button[type="button"]').contains('Login').click();
  //     cy.get('h2[class*="leading-9"]').contains('Select your account type');
  //     cy.get('li[role="presentation"]').contains('Model Account').click();
  //     cy.get('[name="nameEmail"]').type(randomName).type('@islive.dev');
  //     cy.get('[name="password"]').type('SuperSecret1');
  //     cy.contains('Login as model').click();
  //     cy.contains('Continue registration').click();
  //     // //upload cover photo
  //     // cy.get('button[cy-data="openModalBtn"]').contains('Upload cover image').click();
  //     // cy.get('.w-48').contains('Upload').selectFile('cover_image.jpg', { action: 'drag-drop' });
  //     // cy.wait(2000);
  //     // cy.get('[cy-data="saveCroppedBtn"]').click();
  //     // //upload Soft Photo
  //     // cy.get('[cy-data="softImageInput"] [cy-data="openModalBtn"]').click();
  //     // cy.get('label[cy-data="uploadPictureBtn"]').selectFile('soft_image.jpg', { force: true });
  //     // cy.wait(2000);
  //     // cy.get('[cy-data="saveCroppedBtn"]').click({force: true});
  //     // cy.get('[cy-data="saveImageBtn"]').click();
  //     // //upload Sexy Photo
  //     // cy.get('[cy-data="sexyImageInput"] [cy-data="openModalBtn"]').click();
  //     // cy.get('label[cy-data="uploadPictureBtn"]').selectFile('sexy_image.jpg', { force: true });
  //     // cy.wait(2000);
  //     // cy.get('[cy-data="saveCroppedBtn"]').click({force: true});
  //     // cy.get('[cy-data="saveImageBtn"]').click();
  //     // //create model name & add Bio text
  //     // cy.get('input[placeholder="Create your model name"]').type('abctest');
  //     // cy.get('[cy-data="showBioBtn"]').click({force: true})
  //     // cy.get('[cy-data="bioTa"]').type('bio text');
  //     // cy.get('[cy-data="saveBioBtn"]').click();
  //     // //fill model dropdowns
  //     // cy.get('[cy-data="eyeColorSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Blue').click();
  //     // cy.get('[cy-data="hairColorSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Blonde').click();
  //     // cy.get('[cy-data="physiqueSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Slim').click();
  //     // cy.get('[cy-data="breastSizeSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Size A').click();
  //     // cy.get('[cy-data="shavedSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Short').click();
  //     // cy.get('[cy-data="sexualPreferenceSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Straight').click();
  //     // cy.get('[cy-data="relationshipSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Yes').click();
  //     // cy.get('[cy-data="ethnicitySelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('Latin').click();
  //     // cy.get('[cy-data="piercingsSelect"] [type="button"]').click({force: true});
  //     // cy.get('[cy-data="piercingsSelect"] > .relative > .absolute > :nth-child(1) > .flex').click();
  //     // cy.get('[cy-data="tattooSelect"] [type="button"]').click({force: true});
  //     // cy.get('[cy-data="tattooSelect"] > .relative > .absolute > :nth-child(2) > .flex').click();
  //     // cy.get('[cy-data="languagesSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('English').click();
  //     // cy.get('[cy-data="locationSelect"]').type('Amsterdam');
  //     // cy.get('li[class*="select-none"]').contains('Amsterdam, Netherlands').click();
  //     // cy.get('[cy-data="showTypeSelect"] [type="button"]').click({force: true});
  //     // cy.get('li[class*="select-none"]').contains('BDSM').click();
  //     // cy.get('[role="tabpanel"]').click({force: true}); //click the page to close My shows menu
  //     // cy.get('button[class*="button"]').click();
  //     //Step 2 confirmation
  //     cy.get('a[role="tab"]').contains('Personal details');
  //     cy.get('input[name="first-name"]').type('Brenda');
  //     cy.get('input[name="sur-name"]').type('Green');
  //     cy.get('input[name="date-of-birth"]').type('11111999');
  //     cy.get('button[type="button"]').contains('Select').click();
  //     cy.get('div[class="flex items-center space-x-2"]').contains('Albania').click();
  //     cy.get('input[name="address1"]').type('address1');
  //     cy.get('input[name="address2"]').type('address1');
  //     cy.get('input[name="zipcode"]').type('125436');
  //     cy.get('div[class="flex relative"]').type('ams');
  //     cy.get('li[class*="select-none"]').contains('Amsterdam, Netherlands').click();
  //     cy.get('div[class="flex relative w-full"]').contains('Choose type of identification').click();
  //     cy.get('div[class="flex items-center space-x-2"]').contains('ID Card').click();
  //     cy.get('input[name="id-snn"]').type('7558ETR');
  //     cy.get('input[name="id-expire-date"]').type('11112222');
  //     // upload front ID and rest selectors are needed. 
  //     // Waiting for Mitch to put them in the platform
    


      
      
  
  //   });
    
  // });
// })