import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../../support/world";
import { environmentConfig } from "../../config/environment.config";

Given('I open the ERPNext application"', async function (this: CustomWorld) {
  await this.homeActions.openApplication(environmentConfig.baseUrl);
});

Then(
  "the ERPNext application should be displayed",
  async function (this: CustomWorld) {
    await this.homeActions.verifyApplicationLoaded();
  },
);
