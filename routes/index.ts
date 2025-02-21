import {expressApp} from "../api";
import "./recipes";

expressApp.get("/", (req, res) => {
    
    res.send("Welcome to the Dinner Match API!");
});