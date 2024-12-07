import { Request, Response, NextFunction } from 'express'
import * as userRepository from '../repositories/user'

export async function getUser(req: Request, res: Response, next: NextFunction) {
    const users = await userRepository.getUsers();
    res.json(users);
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    let { name, age, semester } = req.body
    const newUser = await userRepository.createUser(name, age, semester)
    res.status(201).json(newUser.toJSON());
}