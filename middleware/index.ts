import cookieParser from "cookie-parser";
import { expressApp } from "../api";
import checkAuthenticated from "./authentication";
import cors from "cors";

expressApp.use(cors())
expressApp.use(cookieParser());
expressApp.use(checkAuthenticated);
