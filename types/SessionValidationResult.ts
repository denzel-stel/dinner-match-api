import { User } from "../../database/models/User";
import { AuthSession } from "../../database/models/AuthSession";

export type SessionValidationResult =
	| { session: AuthSession; user: User }
	| { session: null; user: null };
