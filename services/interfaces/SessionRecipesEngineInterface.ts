import { Recipe } from "../../../database/models/Recipe";
import { Session } from "../../../database/models/Session";
import { User } from "../../../database/models/User";

interface SessionRecipesEngineInterface {
    getUnswiped (session: Session, user: User): Recipe[];
 
    getAll(session: Session): Recipe[]; 

    getMostLiked(session: Session, user: User): Recipe[];

    getUnanimouslyLiked(session: Session): Recipe[];
};

export default SessionRecipesEngineInterface;