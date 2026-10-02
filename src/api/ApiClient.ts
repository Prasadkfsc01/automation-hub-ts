import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(endpoint: string): Promise<APIResponse> {
    return await this.request.get(endpoint);
  }

  async post(endpoint: string, data: unknown): Promise<APIResponse> {
    return await this.request.post(endpoint, {
      data,
    });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(endpoint);
  }
}
