import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto(url: string): Promise<void> {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
    });
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(
      "Open Source Cloud ERP Software | ERPNext",
    );
  }
}
