import { defineConfig, devices } from '@playwright/test';
import * as dotenv from "dotenv";

dotenv.config();

type ProjectOptions = {
  googleBaseUrl: string,
}

export default defineConfig<ProjectOptions>({
  testDir: './src',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'sqli',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: "https://petstore.swagger.io/v2/"
      },
    }
  ]
});
