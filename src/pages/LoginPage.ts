import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page
      .getByRole("textbox", { name: /email|username/i })
      .first();

    this.passwordInput = page.locator('input[type="password"]');

    this.loginButton = page
      .getByRole("button", {
        name: /login|continue/i,
      })
      .first();
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
    });
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async verifyLoginPageDisplayed(): Promise<void> {
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
