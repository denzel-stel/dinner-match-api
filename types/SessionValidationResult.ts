import { User } from "dinner-match-database/src/models/User";
import { AuthSession } from "dinner-match-database/src/models/AuthSession";

export type SessionValidationResult =
	| { session: AuthSession; user: User }
	| { session: null; user: null };
