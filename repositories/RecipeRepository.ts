import {Request, Response} from "express";
import {recipesTable} from "../../database/tables/recipes";
import database from "../database";
import { User } from "../../database/models/User";

class RecipeRepository {
    getAll = async (req: Request, res: Response): Promise<Array<any>> => {
        return database
        .select()
        .from(recipesTable);
    }
}

export default RecipeRepository;