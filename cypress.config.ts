import { defineConfig } from 'cypress';
require('dotenv').config()
export default defineConfig({
  e2e: {
    baseUrl: 'https://uitestingplayground.com',
    //baseUrl: 'https://play1.automationcamp.ir',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      stage: 'https://stage.pasv.us/user/login',
      prod: 'https://coding.pasv.us',
      test: 'Hello World!',
      demoQA:'https://demoqa.com',
      expected_conditions: 'https://play1.automationcamp.ir/expected_conditions.html',
      email: 'klobynicheva@hotmail.com',
      password: 'HelloWorld1',
      herokuapp: 'https://the-internet.herokuapp.com'
    },
  },
  viewportWidth: 1200,
  viewportHeight: 1400,
  retries: {
    runMode: 2,
    openMode: 1,
  },

  defaultCommandTimeout: 16000
});
