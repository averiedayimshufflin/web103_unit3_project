import { pool } from './database.js'

// COPY/PASTE HERE, STEP 2:
// Put your DROP TABLE / CREATE TABLE / INSERT INTO seed data here.
// You need an appropriately structured events table for the project.
// You will probably also want a locations table because the starter UI expects locations.
//
// Example shape to build from:
// const createLocationsTable = `
//     CREATE TABLE IF NOT EXISTS locations (
//         id SERIAL PRIMARY KEY,
//         name TEXT NOT NULL,
//         address TEXT,
//         city TEXT,
//         state TEXT,
//         zip TEXT,
//         image TEXT
//     );
// `
//
// const createEventsTable = `
//     CREATE TABLE IF NOT EXISTS events (
//         id SERIAL PRIMARY KEY,
//         title TEXT NOT NULL,
//         date DATE NOT NULL,
//         time TIME,
//         image TEXT,
//         location_id INTEGER REFERENCES locations(id)
//     );
// `

const resetDatabase = async () => {
    try {
        // COPY/PASTE HERE:
        // await pool.query(dropTables)
        // await pool.query(createLocationsTable)
        // await pool.query(createEventsTable)
        // await pool.query(seedLocations)
        // await pool.query(seedEvents)

        console.log('Database reset finished')
    }
    catch (error) {
        console.error(error)
    }
    finally {
        await pool.end()
    }
}

resetDatabase()
