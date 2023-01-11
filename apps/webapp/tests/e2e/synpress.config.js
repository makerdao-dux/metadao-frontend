/* eslint-disable */
const log = require('debug')('synpress:config');
const path = require('path');
const { defineConfig } = require('cypress');
const synpressPath = getSynpressPath();
const pluginsPath = `${synpressPath}/plugins/index`;
const setupNodeEvents = require(pluginsPath);
const fixturesFolder = `${synpressPath}/fixtures`;

log(`Detected synpress root path is: ${synpressPath}`);
log(`Detected synpress plugin path is: ${pluginsPath}`);
log(`Detected synpress fixtures path is: ${fixturesFolder}`);

module.exports = defineConfig({
  userAgent: 'synpress',
  retries: {
    runMode: process.env.CI ? 1 : 0,
    openMode: 0
  },
  fixturesFolder,
  screenshotsFolder: 'tests/e2e/screenshots',
  videosFolder: 'tests/e2e/videos',
  chromeWebSecurity: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    coverage: false
  },
  defaultCommandTimeout: process.env.SYNDEBUG ? 9999999 : 30000,
  pageLoadTimeout: process.env.SYNDEBUG ? 9999999 : 30000,
  requestTimeout: process.env.SYNDEBUG ? 9999999 : 30000,
  e2e: {
    setupNodeEvents,
    baseUrl: 'http://localhost:3000/',
    supportFile: 'tests/e2e/support.js',
    specPattern: 'tests/e2e/specs/**/*.{js,jsx,ts,tsx}'
  },
  component: {
    setupNodeEvents,
    specPattern: './**/*spec.{js,jsx,ts,tsx}',
    supportFile: 'tests/e2e/support.js'
  }
});

function getSynpressPath() {
  if (process.env.SYNPRESS_LOCAL_TEST) {
    return '.';
  } else {
    return path.dirname(require.resolve('@synthetixio/synpress'));
  }
}
