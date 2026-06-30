import { APIResponse } from "@playwright/test";
import { PetStoreClient } from "../api/PetStoreClient";
import { UserPayload } from "../models/UserModel";

export class PetStoreActions {
    constructor(private petStoreClient: PetStoreClient) {}


    async createUser(userPayload: UserPayload): Promise<APIResponse> {
        return await this.petStoreClient.userEndpoints.createUser(userPayload)
    }

    async getUser(username: String) : Promise<APIResponse> {
        return await this.petStoreClient.userEndpoints.getUser(username)
    }
}