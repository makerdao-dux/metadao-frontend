/* eslint-disable */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: 'tests/e2e/support.js',
    specPattern: 'tests/e2e/specs/**/*.{js,jsx,ts,tsx}'
  }
});
