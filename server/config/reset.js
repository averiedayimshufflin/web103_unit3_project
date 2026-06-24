import { pool } from './database.js'

const dropEventsTable = 'DROP TABLE IF EXISTS events'
const dropLocationsTable = 'DROP TABLE IF EXISTS locations'

const createLocationsTable = `
    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        zip TEXT NOT NULL,
        image TEXT NOT NULL
    )
`

const createEventsTable = `
    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        image TEXT NOT NULL,
        location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE
    )
`

const seedLocationsTable = `
    INSERT INTO locations (name, address, city, state, zip, image)
    VALUES
        (
            'Canvas Courtyard',
            '101 Mural Way',
            'Dallas',
            'TX',
            '75201',
            'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80'
        ),
        (
            'Indigo Print Studio',
            '240 Inkpress Ave',
            'Dallas',
            'TX',
            '75202',
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80'
        ),
        (
            'Sculpture Garden',
            '88 Bronze Loop',
            'Dallas',
            'TX',
            '75204',
            'https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=900&q=80'
        ),
        (
            'Lightbox Gallery',
            '412 Prism Street',
            'Dallas',
            'TX',
            '75206',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
        )
`

const seedEventsTable = `
    INSERT INTO events (title, date, time, image, location_id)
    VALUES
        (
            'Community Mural Jam',
            '2026-07-12',
            '18:30',
            'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80',
            1
        ),
        (
            'Open-Air Figure Drawing',
            '2026-07-20',
            '10:00',
            'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80',
            1
        ),
        (
            'Risograph Poster Night',
            '2026-08-03',
            '19:00',
            'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80',
            2
        ),
        (
            'Zine Swap and Staple Party',
            '2026-06-14',
            '16:00',
            'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=900&q=80',
            2
        ),
        (
            'Clay Creatures Workshop',
            '2026-08-17',
            '13:30',
            'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80',
            3
        ),
        (
            'Found Object Sculpture Walk',
            '2026-09-05',
            '11:00',
            'https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=900&q=80',
            3
        ),
        (
            'Projection Mapping Night',
            '2026-07-26',
            '20:30',
            'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80',
            4
        ),
        (
            'Tiny Gallery Pop-Up',
            '2026-06-01',
            '17:00',
            'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
            4
        )
`

const resetDatabase = async () => {
    try {
        await pool.query(dropEventsTable)
        await pool.query(dropLocationsTable)
        await pool.query(createLocationsTable)
        await pool.query(createEventsTable)
        await pool.query(seedLocationsTable)
        await pool.query(seedEventsTable)

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
