import { expressApp } from "../api";

expressApp.get("/auth/users", (req, res) => {
    res.send("Get all users");
});