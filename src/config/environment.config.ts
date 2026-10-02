import dotenv from "dotenv";

dotenv.config();

function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const environmentConfig = {
  baseUrl: getEnv("BASE_URL"),
  username: getEnv("TEST_USERNAME"),
  password: getEnv("TEST_PASSWORD"),
  apiBaseUrl: getEnv("API_BASE_URL"),
  apiToken: getEnv("API_TOKEN"),
};
