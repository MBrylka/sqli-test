import { UserPayload } from "../models/UserModel";

export const validUserPayload: UserPayload = {
    username: 'johnSnow',
    firstName: 'John',
    lastName: 'Snow',
    email: 'john.snow@example.com',
    password: 'h0ldTh3D00r',
    phone: '123456',
    userStatus: 0
}

export const invalidUserPayload: Partial<UserPayload> = {
    firstName: 'invalid'
}