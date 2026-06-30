import { APIRequestContext } from "@playwright/test";
import { UserEndpoints } from "../components/UserEndpoints";

export class PetStoreClient {
    readonly userEndpoints: UserEndpoints

    constructor(private request: APIRequestContext) {
        this.userEndpoints = new UserEndpoints(request)
    }
}