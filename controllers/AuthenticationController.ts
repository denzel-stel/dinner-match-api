import AuthenticationSessionService from "../services/AuthenticationSessionService";
import { SignInRequest } from "../types/requests/SignInRequest";
import AuthenticationControllerInterface from "./interfaces/AuthenticationControllerInterface";

class AuthenticationController implements AuthenticationControllerInterface {


  async signIn(req: SignInRequest, res: Response): Promise<void> {

    // Check if the user is already authenticated
    
    const token = AuthenticationSessionService.generateSessionToken();
    const session = AuthenticationSessionService.createAuthSession(token);
    setSessionTokenCookie(token);
    
  }

  async register(req: Request, res: Response): Promise<void> {
    // insert user into database
  }
}

export default new AuthenticationController();