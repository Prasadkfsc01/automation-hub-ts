import { Given, Then, When } from "@cucumber/cucumber";

import { CustomWorld } from "../../support/world";
import { environmentConfig } from "../../config/environment.config";

Given("I open the ERPNext login page", async function (this: CustomWorld) {
  await this.homePage.goto(environmentConfig.baseUrl);
});

When("I login with valid credentials", async function (this: CustomWorld) {
  await this.loginActions.login(
    environmentConfig.username,
    environmentConfig.password,
  );
});

Then("I should be logged into ERPNext", async function (this: CustomWorld) {
  await this.loginActions.verifyLoginPageDisplayed();
});
