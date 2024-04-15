import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "us176b", // Add projectId here
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
