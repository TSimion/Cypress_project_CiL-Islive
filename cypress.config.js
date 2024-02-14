const { defineConfig } = require("cypress");



module.exports = defineConfig({
  projectId: 'kb21dx',
  //requestTimeout: 30000,
  //responseTimeout: 30000,
  //defaultCommandTimeout: 30000,
  
  e2e: {

   
    
    // // baseUrl: 'https://test.islive.dev',
    // chromeWebSecurity: false,
		// experimentalSourceRewriting: false,
		// experimentalSessionAndOrigin: true,
		// experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    // examples run against the playground app
    //baseUrl: 'https://playground.mailslurp.com',
    // these examples require no test isolation
    //testIsolation: false
      
      
  },
});





