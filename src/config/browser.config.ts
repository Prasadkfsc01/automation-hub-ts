export const browserConfig = {
  headless: process.env.CI === "true",
  timeout: 30000,
  slowMo: 50,
  viewport: { width: 1980, height: 1200 },
  ignoreHTTPSErrors: true,
};
