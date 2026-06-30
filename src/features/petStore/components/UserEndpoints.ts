import { APIRequestContext, APIResponse } from "@playwright/test";
import { UserPayload } from "../models/UserModel";

export class UserEndpoints {
    constructor(private request: APIRequestContext) {}

    async createUser(userPayload: UserPayload | Partial<UserPayload>): Promise<APIResponse> {
        return await this.request.post('user', {data: userPayload})
    }

    async getUser(username: String): Promise<APIResponse> {
        return await this.request.get(`user/${username}`)
    }

}