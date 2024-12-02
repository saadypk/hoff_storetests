import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', // Directory for your test files
  reporter: [
    ['html', { open: 'always' }], // HTML report, opens automatically after tests
    ['list'], // Additional console output of test results
  ],
  use: {
    baseURL: 'https://hoff.is', // Your app's base URL for tests
    headless: true, // Run tests in headless mode (can be false for seeing tests run in a browser)
    screenshot: 'only-on-failure', // Take screenshots only if a test fails
    video: 'retain-on-failure', // Record videos for failed tests
  },
});
