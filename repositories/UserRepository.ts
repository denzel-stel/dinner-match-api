import { eq } from "drizzle-orm";
import { usersTable } from "../../database/tables/users";
import database from "../database";
import { User } from "../../database/models/User";

class UserRepository {

    public async getById(id: number): Promise<User> {
        const result =  await database
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, id));

        if (result.length === 0) {
            throw new Error("User not found");
        }
        
        return result[0];
    }

    public async create(user: User) {
        await database.insert(usersTable).values(user);
    }
}

export default new UserRepository();