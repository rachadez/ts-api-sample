import { User } from '../models/user/user'

export async function createUser(name: String, age: number, semester: number) {
    const newUser = await User.create({
        name: name,
        age: age,
        semester: semester
    });

    return newUser
}

export async function getUsers() {
    const users = await User.findAll()
    return users;
}

export * from './user'