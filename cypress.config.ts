import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 10000,
  video: true,
  chromeWebSecurity: true,
  watchForFileChanges: false,
  failOnStatusCode: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  screenshotOnRunFailure: true,
  restartBrowserBetweenSpecFiles: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/integration',
    overwrite: false,
    html: true,
    json: true,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line import/extensions
      return require('./cypress/plugins/index.ts')(on, config);
    },
    baseUrl: 'https://github.com/',
    excludeSpecPattern: '*.js',
  },
});
