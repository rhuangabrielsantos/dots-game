import { defineConfig } from 'cypress'

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  projectId: 'c3xqne',
  viewportWidth: 1075,
  viewportHeight: 839,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
