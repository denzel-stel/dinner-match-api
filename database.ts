import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";
import {SeedManager} from "../database/seeders";

console.log('Connecting to the database...')
const database: NodePgDatabase = drizzle(process.env.DATABASE_URL!);

console.log('Connected to the database!')

export default database;