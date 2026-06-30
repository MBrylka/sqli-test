import test, { expect, request } from "@playwright/test";
import { PetStoreClient } from "./api/PetStoreClient";
import { PetStoreActions } from "./actions/PetStoreActions";
import { validUserPayload } from "./data/UsersData";


test.describe('User creation', async () => {
    test('Create valid user and verify it exists', async ({request}) => {
        const petStoreClient = new PetStoreClient(request)
        const petStoreActions = new PetStoreActions(petStoreClient)

        const userCreationResponse = await petStoreActions.createUser(validUserPayload)
        expect(userCreationResponse.status()).toBe(201)

        const getUserResponse = await petStoreActions.getUser(validUserPayload.username)
        expect(getUserResponse.status()).toBe(200)
    })
})