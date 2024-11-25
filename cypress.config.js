const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  pageLoadTimeout: 30000,
  taskTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 20000,
  defaultCommandTimeout: 5000,
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  //this can be hosted in Azure blob also
  trashAssetsBeforeRuns: true,
  capture: 'fullPage',
  retries: {
    openMode: 0 // for 2 attempts
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 0,
  
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        /* ... */
      })
    },
    
  video: true,
  setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  //allureWriter(on, config);
  return config;
  },
 }, 
});