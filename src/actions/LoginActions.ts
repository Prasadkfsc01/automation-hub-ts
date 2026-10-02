import { LoginPage } from "../pages/LoginPage";

export class LoginActions {
  constructor(private readonly loginPage: LoginPage) {}

  async login(username: string, password: string): Promise<void> {
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
  }

  async verifyLoginPageDisplayed(): Promise<void> {
    await this.loginPage.verifyLoginPageDisplayed();
  }
}
