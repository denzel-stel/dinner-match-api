// Class that imports all seeders from database module
// and runs them

import {reset, seed} from "drizzle-seed";
import database from "dinner-match-database/src/database";
import RecipesSeeder from "dinner-match-database/";
import schema from "../tables/schema";
import {GenericSeeder} from "./interfaces/GenericSeeder";

export class SeedManager {
    private seeders: GenericSeeder[] = [
        new RecipesSeeder(),
    ];
    async runAllFresh() {
        await reset(database, schema);
        for(const seeder of this.seeders) {
            await seeder.run();
        }
    }
}

