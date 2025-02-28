import { NextFunction, Request, Response } from "express";
import StytchClient from "../helpers/StytchClient";


export default  async function checkAuthenticated(req: Request, res: Response, next:NextFunction)  {

    try {
        if(!("authorization" in req.headers)) {
            throw new Error("User unauthenticated.")
        }
        const token = req.headers.authorization;
        const trimmedToken = token.substring(7);
        const res = await StytchClient.sessions.authenticateJwt({
            session_jwt: trimmedToken.trim()
        })
        console.log(res)
        next();
    }
    catch (e) {
        console.log("error", e);
        res.status(401).send("User unauthenticated.")
    }
 
}