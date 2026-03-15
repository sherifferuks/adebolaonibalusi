import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Create the connection using the environment variable pulled from Vercel
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
