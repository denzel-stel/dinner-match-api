/**
 * Main entry point for the REST API Application
 * This file imports all the other files in the api directory.
 */

// Bootrstrap Express 
import "./api";

// Register all the middleware;
import "./middleware";

// Bootstrap routes
import "./routes/index";

// Run database seeders
import "../database/seeders/index";