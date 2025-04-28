import { NextFunction, Request, Response } from "express";
import AuthenticationSessionService from "../services/AuthenticationSessionService";
import { SessionValidationResult } from "../types/SessionValidationResult";


export default  async function checkAuthenticated(req: Request, res: Response, next:NextFunction)  {
    try {
        if(!("authorization" in req.headers)) {
            throw new Error("User unauthenticated.")
        }
        const token = req.headers.authorization;
        const result: SessionValidationResult = await AuthenticationSessionService.validateSessionToken(token);
        if (result.session === null) {
            throw new Error("User unauthenticated.")
        }
        next();
    }
    catch (e) {
        console.log("error", e);
        res.status(401).send("User unauthenticated.")
    }
 
}