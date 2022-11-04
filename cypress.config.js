const { defineConfig } = require('cypress')
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  
  // experimentalFetchPolyfill: true,
  trashAssetsBeforeRuns: false,
  watchForFileChanges: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  video: true,
  screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: false,
      overwrite: true,
      html: true,
      json: true,
      charts: true,
      '-reportFilename': true,
      '-reportTitle': true,
      
    },
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    db: {
      host: 'https://dev1.px4app.com/pma/index.php',
      user: '#Px420dev',
      password: '6~<:*eZu8&pFCJ6F',
      database: 'px4db',
      port: 4407,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // baseUrl: 'https://infraqa.px4app.com/index.php/',
    experimentalSessionAndOrigin: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      // allureWriter(on, config);
      // return config;
    }
  //  experimentalSessionAndOrigin: true
    //experimentalSessionSupport: true
  },
})
