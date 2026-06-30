import test from "@playwright/test";
import { PetStoreClient } from "./api/PetStoreClient";
import { PetStoreActions } from "./actions/PetStoreActions";
import { PetData } from "./models/PetModel";
import { ExClass } from "./excercise/ExClass";


function soldPets(pets: PetData[]): void {
    pets.forEach((pet: PetData) => {
        console.log({id: pet.id, name: pet.name})
        test.expect(pet.status).toBe("sold")
    })
}

function displayUniquePetNames(names: { name: string; amount: number; }[]): void {
        names.forEach(({name, amount}) => {
            console.log({name, amount})
        })
}


test.describe('Pet store api tests', async () => {
    test('Find pets by status', async ({request}) => {
        const petStoreClient = new PetStoreClient(request)
        const petStoreActions = new PetStoreActions(petStoreClient)
        const response = await petStoreActions.findPetsByStatus("sold")
        const responseJson = await response.json()
        soldPets(responseJson)
    })

    test('Display unique pet names', async ({request}) => {
        const petStoreClient = new PetStoreClient(request)
        const petStoreActions = new PetStoreActions(petStoreClient)
        const response = await petStoreActions.findPetsByStatus("available")
        const responseJson = await response.json()
        const exClass = new ExClass(responseJson)
        const namesCount = exClass.countUniqueNames()
        displayUniquePetNames(namesCount)
    })
})