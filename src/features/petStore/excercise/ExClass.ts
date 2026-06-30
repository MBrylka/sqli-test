import { PetData } from "../models/PetModel";

export class ExClass {
    constructor(private pets: PetData[]) {}


    countUniqueNames(): {name: string, amount: number}[] {
        const uniqueNames: { [key: string]: number } = {};
        this.pets.forEach(pet => {
            uniqueNames[pet.name] = (uniqueNames[pet.name] || 0) + 1;
        });
        return Object.entries(uniqueNames).map(([name, amount]) => ({ name, amount }));
    }
}