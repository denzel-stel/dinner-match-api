import { Recipe } from "dinner-match-database/src/models/Recipe";
import { Session } from "dinner-match-database/src/models/Session";
import { User } from "dinner-match-database/src/models/User";

interface SessionRecipesEngineInterface {
    getUnswiped (session: Session, user: User): Recipe[];
 
    getAll(session: Session): Recipe[]; 

    getMostLiked(session: Session, user: User): Recipe[];

    getUnanimouslyLiked(session: Session): Recipe[];
};

export default SessionRecipesEngineInterface;