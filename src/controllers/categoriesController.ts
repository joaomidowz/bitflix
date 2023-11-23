import { Request, Response } from "express";
import { categryService } from "../services/categorieService";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const categoriesController = {
    index: async (req: Request, res: Response  ) => {

        const [page, perPage] = getPaginationParams(req.query)

        try {
        const paginatedCategories = await categryService.findAllPaginated(page, perPage)
        
        return res.json(paginatedCategories)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
            }
        }


    }
}