import { Recipe } from "dinner-match-database/src/models/Recipe";
import { Session } from "dinner-match-database/src/models/Session";
import { User } from "dinner-match-database/src/models/User";
import SessionRecipesEngineInterface from "./interfaces/SessionRecipesEngineInterface";

class SessionRecipesEngine implements SessionRecipesEngineInterface {
    getUnswiped(session: Session, user: User): Recipe[] {
        // Implementation to get unswiped recipes for a user in a session
        return [];
    }

    getAll(session: Session): Recipe[] {
        // Implementation to get all recipes in a session
        return [];
    }

    getMostLiked(session: Session, user: User): Recipe[] {
        // Implementation to get most liked recipes for a user in a session
        return [];
    }

    getUnanimouslyLiked(session: Session): Recipe[] {
        // Implementation to get unanimously liked recipes in a session
        return [];
    }
}

export default new SessionRecipesEngine();