import { APIRequestContext, APIResponse } from "@playwright/test";
import { UserPayload } from "../models/UserModel";

export class PetEndpoints {
    constructor(private request: APIRequestContext) {}

    async findByStatus(status: "available" | "pending" | "sold"): Promise<APIResponse> {
        return await this.request.get(`pet/findByStatus?status=${status}`)
    }
}