import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { AuthSession } from "../../database/models/AuthSession";
import { authSessionsTable } from "../../database/tables/auth_sessions";
import database from "../database";
import { sha256 } from "@oslojs/crypto/sha2";

class AuthenticationSessionService {
    generateSessionToken(): string {
        const bytes = new Uint8Array(20);
        crypto.getRandomValues(bytes);
        const token = encodeBase32LowerCaseNoPadding(bytes);
        return token;
    }
    async createSession(token: string, userId: number): Promise<AuthSession> {
        const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
        const session: AuthSession = {
            id: sessionId,
            userId,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
        };
        await database.insert(authSessionsTable).values(session);
        return session;
    }
    
};

default export new AuthenticationSessionService();