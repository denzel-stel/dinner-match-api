/**
 * Main entry point for the REST API Application
 * This file imports all the other files in the api directory.
 */

// console.log("Hello world!");
// Bootrstrap Express 
import "./api.ts";

// Register all the middleware;
import "./middleware";

// Bootstrap routes
import "./routes/index.ts";

// Run database seeders
import "./seeders/index.ts";
