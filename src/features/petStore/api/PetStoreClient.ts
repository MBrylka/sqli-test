import { APIRequestContext } from "@playwright/test";
import { UserEndpoints } from "../components/UserEndpoints";
import { PetEndpoints } from "../components/PetEndpoints";

export class PetStoreClient {
    readonly userEndpoints: UserEndpoints
    readonly petEndpoints: PetEndpoints
    constructor(private request: APIRequestContext) {
        this.userEndpoints = new UserEndpoints(request)
        this.petEndpoints = new PetEndpoints(request)
    }
}