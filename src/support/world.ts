import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import {
  APIRequestContext,
  APIResponse,
  Browser,
  BrowserContext,
  Page,
} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { HomeActions } from "../actions/HomeActions";
import { LoginPage } from "../pages/LoginPage";
import { LoginActions } from "../actions/LoginActions";
import { UserApi } from "../api/UserApi";
import { User } from "../models/User";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  homePage!: HomePage;
  homeActions!: HomeActions;

  loginPage!: LoginPage;
  loginActions!: LoginActions;

  apiRequest?: APIRequestContext;
  userApi?: UserApi;
  apiResponse?: APIResponse;

  testUser?: User;
  createdUserId?: number;
  accessToken?: string;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
