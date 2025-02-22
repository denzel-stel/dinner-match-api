import { NextFunction, Request, Response } from "express";
import {Client} from "stytch";
import { ClientConfig } from "stytch/types/lib/shared/client";

export default  async function checkAuthenticated(req: Request, res: Response, next:NextFunction)  {

    console.log(JSON.stringify(req.cookies));
    const config: ClientConfig = {
        project_id: process.env.STYTCH_PROJECT_ID || "",
        secret: process.env.STYTCH_SECRET_KEY || ""
    };
    const client = new Client(config);
    try {
        if(!("authorization" in req.headers)) {
            throw new Error("User unauthenticated.")
        }
        const token = req.headers.authorization;
        const trimmedToken = token.substring(7);
        console.log("trimmed token" + trimmedToken.trim())
        const res = await client.sessions.authenticateJwt({
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