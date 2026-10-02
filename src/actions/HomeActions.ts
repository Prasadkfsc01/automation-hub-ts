import { HomePage } from "../pages/HomePage";

export class HomeActions {
  constructor(private homePage: HomePage) {}

  async openApplication(url: string) {
    await this.homePage.goto(url);
  }

  async verifyApplicationLoaded() {
    await this.homePage.verifyPageLoaded();
  }
}
