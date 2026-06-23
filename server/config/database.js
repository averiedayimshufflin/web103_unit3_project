import pg from 'pg'

// COPY/PASTE HERE, STEP 2:
// This file is where your backend connects to your Render PostgreSQL database.
// The values come from server/.env, so do not paste your password directly in here.
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)
