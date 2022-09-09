interface IUser {
    name: String;
    email: String;
};

export const createUser = (user: IUser): IUser => {
    return user;
}

export const updateUser = (user: IUser): IUser => {
    return user;
}

export const deleteUser = (email: String): String => {
    return 'User delete sucessfuly!'
}