import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
