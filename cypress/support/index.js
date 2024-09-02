// cypress/support/index.js

import './commands'; // Asegúrate de que esta línea esté presente

import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

require('junit/register');

module.exports = (on, config) => {
  on('test:finished', (test) => {
    if (test.state === 'failed') {
      Cypress.config('videoCompression', 32);
      Cypress.config('video', true);
    }
  });
};