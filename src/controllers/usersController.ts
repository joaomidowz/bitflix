import { Response } from "express";
import { AuthenticatedRequest } from "../middlewers/auth";
import { userService } from "../services/serviceUserService";

export const usersController = {
    // GET /users/current/watching
    wathching: async (req: AuthenticatedRequest, res: Response) => {
        const { id } = req.user!

        try {
            const watching = await userService.getKeepWatchingList(id)
            return res.json(watching)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
            }
        }
    }
}