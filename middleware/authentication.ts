import {Client} from "stytch";
import { ClientConfig } from "stytch/types/lib/shared/client";

export default  async function checkAuthenticated(req: any, res: any, next:any)  {

    console.log(JSON.stringify(req.cookies));
    const config: ClientConfig = {
        project_id: process.env.STYTCH_PROJECT_ID || "",
        secret: process.env.STYTCH_SECRET_KEY || ""
    };
    const client = new Client(config);
    try {
        if (!('session_token' in req.cookies)) {  
            throw new Error("No session token provided.");
        }
        await client.sessions.authenticate({
            session_token: req.cookies['session_token'] || ''
        })
        next();
    }
    catch {
        res.status(401).send("User unauthenticated.")
    }
 
}