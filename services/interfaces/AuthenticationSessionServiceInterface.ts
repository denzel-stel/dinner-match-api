import { AuthSession } from "../../../database/models/AuthSession";
import { User } from "../../../database/models/User";
import { SessionValidationResult } from "../../types/SessionValidationResult";

interface AuthenticationSessionServiceInterface {
    generateSessionToken(): string;

    createSession(token: string, userId: number): Promise<AuthSession>;

    validateSessionToken(token: string): Promise<SessionValidationResult>;

    invalidateSession(sessionId: string): Promise<void> ;

    invalidateAllSessions(userId: number): Promise<void>;

};


export default AuthenticationSessionServiceInterface;