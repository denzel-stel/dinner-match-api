import UserRepository from "../repositories/UserRepository";
import { Request, Response } from "express";

class UserController {
    async getUserByStytch(req: Request, res: Response): Promise<void> {
        const user = await UserRepository.getByStytchId(req.params.userId);
        res.send(user);
    }

    async getAll(req: Request, res: Response): Promise<void> {
        const users = await UserRepository.getAll();
        res.send(users);
    }

    async getById(req: Request, res: Response): Promise<void> {
        const user = await UserRepository.getById(Number(req.params.id));
        res.send(user);
    }
}

export default new UserController();