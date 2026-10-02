import { After, Before, Status, setDefaultTimeout } from "@cucumber/cucumber";

import { chromium, expect, request } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

import { CustomWorld } from "../support/world";
import { browserConfig } from "../config/browser.config";

import { HomePage } from "../pages/HomePage";
import { HomeActions } from "../actions/HomeActions";

import { LoginPage } from "../pages/LoginPage";
import { LoginActions } from "../actions/LoginActions";
import { UserApi } from "../api/UserApi";
import { AuthApi } from "../api/AuthApi";
import { environmentConfig } from "../config/environment.config";

setDefaultTimeout(browserConfig.timeout);

const config = environmentConfig;

Before({ tags: "@ui" }, async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: browserConfig.headless,
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  this.homePage = new HomePage(this.page);
  this.loginPage = new LoginPage(this.page);

  this.homeActions = new HomeActions(this.homePage);
  this.loginActions = new LoginActions(this.loginPage);
});

After({ tags: "@ui" }, async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshotDir = path.join(process.cwd(), "reports", "screenshots");

    fs.mkdirSync(screenshotDir, {
      recursive: true,
    });

    const safeScenarioName = scenario.pickle.name.replace(
      /[^a-zA-Z0-9-_]/g,
      "_",
    );

    const screenshotPath = path.join(screenshotDir, `${safeScenarioName}.png`);

    const screenshot = await this.page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });

    await this.attach(screenshot, "image/png");

    console.log(`Screenshot saved: ${screenshotPath}`);
  }

  await this.context?.close();
  await this.browser?.close();
});

Before({ tags: "@api" }, async function (this: CustomWorld) {
  const authApi = new AuthApi();

  const auth = await authApi.getToken();

  this.accessToken = auth.accessToken;

  this.apiRequest = await request.newContext({
    baseURL: config.apiBaseUrl,
    extraHTTPHeaders: {
      Authorization: `Bearer ${this.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  this.userApi = new UserApi(this.apiRequest);
});

After({ tags: "@api" }, async function (this: CustomWorld) {
  try {
    if (this.createdUserId && this.userApi) {
      const response = await this.userApi.deleteUser(this.createdUserId);

      console.log(
        `*** Log - cleanup user ${this.createdUserId}: ${response.status()} ***`,
      );
      expect([200, 204]).toContain(response.status());
    }
  } catch (error) {
    console.error(`Failed to clean up user ${this.createdUserId}`, error);
  } finally {
    await this.apiRequest?.dispose();
  }
});
