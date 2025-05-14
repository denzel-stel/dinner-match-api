import {Request, Response} from "express";
import {recipesTable} from "dinner-match-database/src/tables/recipes";
import database from "dinner-match-database/src/database";
import { User } from "dinner-match-database/src/models/User";

class RecipeRepository {
    getAll = async (req: Request, res: Response): Promise<Array<any>> => {
        return database
        .select()
        .from(recipesTable);
    }
}

export default RecipeRepository;