import RecipeController from "../controllers/RecipeController";
import {expressApp} from "../api";

const recipeController = new RecipeController();

expressApp.get("/recipes", recipeController.getAll);
