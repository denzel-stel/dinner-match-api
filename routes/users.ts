import { expressApp } from "../api";
import UserController from "../controllers/UserController";

expressApp.get("/auth/users", UserController.getAll);

expressApp.get("/auth/users/stytch/:uuid", UserController.getUserByStytch);

expressApp.get("/auth/users/:id", UserController.getById);