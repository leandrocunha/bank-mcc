import { createFile } from "../utils/fileHandler";

interface IUser {
    name: String;
    email: String;
};

export const createUser = (user: IUser): object => {
    if(!user.name || !user.email) {
        return {
            statusText: 'error',
            statusCode: 200,
            statusMessage: 'User not create'
        };
    }

    createFile(JSON.stringify(user));
    return {
        statusText: 'success',
        statusCode: 200,
        statusMessage: 'User create succesfuly',
        data: user
    };
}

export const updateUser = (user: IUser): IUser => {
    return user;
}

export const deleteUser = (email: String): String => {
    return 'User delete sucessfuly!'
}