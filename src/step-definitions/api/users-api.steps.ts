import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { CustomWorld } from "../../support/world";
import { User } from "../../models/User";
import { TestDataUtils } from "../../utils/TestDefaults";

When(
  "I request user with id {int}",
  async function (this: CustomWorld, id: number) {
    if (!this.userApi) {
      throw new Error("UserApi is not initialized");
    }

    this.apiResponse = await this.userApi.getUser(id);
  },
);

Then(
  "the API response status should be {int}",
  function (this: CustomWorld, expectedStatus: number) {
    if (!this.apiResponse) {
      throw new Error("API response is not available");
    }

    expect(this.apiResponse.status()).toBe(expectedStatus);
  },
);

Then(
  "the user response should contain an id",
  async function (this: CustomWorld) {
    if (!this.apiResponse) {
      throw new Error("API response is not available");
    }

    const responseBody = (await this.apiResponse.json()) as User;

    expect(responseBody.id).toBeDefined();
  },
);

When("I create a new user", async function (this: CustomWorld) {
  if (!this.userApi) {
    throw new Error("UserApi is not initialized");
  }

  const user: User = {
    name: TestDataUtils.randomName(),
    email: TestDataUtils.randomEmail(),
  };

  this.testUser = user;
  this.apiResponse = await this.userApi.createUser(user);

  const responseBody = (await this.apiResponse.json()) as User;
  this.createdUserId = responseBody.id;
});

Then(
  "the created user response should contain the submitted details",
  async function (this: CustomWorld) {
    if (!this.apiResponse) {
      throw new Error("API response is not available");
    }

    if (!this.testUser) {
      throw new Error("Submitted test user is not available");
    }

    const responseBody = (await this.apiResponse.json()) as User;

    expect(responseBody.name).toBe(this.testUser.name);
    expect(responseBody.email).toBe(this.testUser.email);
    expect(responseBody.id).toBeDefined();
  },
);
