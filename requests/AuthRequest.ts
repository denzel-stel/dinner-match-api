import { Request } from 'express';
import { User } from '../../models/User'; // Adjust the path to your Drizzle ORM User model
import { AuthSession } from '../../database/models/AuthSession';

export interface AuthRequest extends Request {
    user?: User; // Add the user object to the AuthRequest interface
    session?: AuthSession; // Add the session object to the AuthRequest interface
}