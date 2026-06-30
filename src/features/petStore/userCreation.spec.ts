import test, { expect, request } from "@playwright/test";
import { PetStoreClient } from "./api/PetStoreClient";
import { PetStoreActions } from "./actions/PetStoreActions";
import { invalidUserPayload, validUserPayload } from "./data/UsersData";


test.describe('User creation', async () => {
    test('Create valid user and verify it exists', async ({request}) => {
        const petStoreClient = new PetStoreClient(request)
        const petStoreActions = new PetStoreActions(petStoreClient)

        const userCreationResponse = await petStoreActions.createUser(validUserPayload)
        expect(userCreationResponse.status()).toBe(201) // Defence

        const getUserResponse = await petStoreActions.getUser(validUserPayload.username)
        expect(getUserResponse.status()).toBe(200)
    })

    test('Create user with invalid payload and verify error response', async ({request}) => {
        const petStoreClient = new PetStoreClient(request)
        const petStoreActions = new PetStoreActions(petStoreClient)

        const userCreationResponse = await petStoreActions.createUser(invalidUserPayload)
        expect(userCreationResponse.status()).toBe(400)
        //SOme message expect like 'email must be provided' etc
    })

})