import { APIRequestContext, APIResponse } from "@playwright/test";

import { ApiClient } from "./ApiClient";
import { User } from "../models/User";

export class UserApi {
  private readonly apiClient: ApiClient;

  private readonly usersEndpoint = "/users";

  constructor(request: APIRequestContext) {
    this.apiClient = new ApiClient(request);
  }

  async getUsers(): Promise<APIResponse> {
    return await this.apiClient.get(this.usersEndpoint);
  }

  async getUser(id: number): Promise<APIResponse> {
    return await this.apiClient.get(`${this.usersEndpoint}/${id}`);
  }

  async createUser(user: User): Promise<APIResponse> {
    return await this.apiClient.post(this.usersEndpoint, user);
  }

  async deleteUser(id: number): Promise<APIResponse> {
    return await this.apiClient.delete(`${this.usersEndpoint}/${id}`);
  }
}
