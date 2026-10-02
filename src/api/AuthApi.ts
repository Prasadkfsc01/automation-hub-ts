import { AuthToken } from "../models/AuthToken";
import { environmentConfig } from "../config/environment.config";

const config = environmentConfig;

export class AuthApi {
  getToken(): AuthToken {
    if (!config.apiToken) {
      throw new Error("API_TOKEN is not configured");
    }

    return {
      accessToken: config.apiToken,
      tokenType: "Bearer",
    };
  }
}
