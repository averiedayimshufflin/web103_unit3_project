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
            'Beacon Park',
            '101 Trainer Trail',
            'Dallas',
            'TX',
            '75201',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
        ),
        (
            'Raid Plaza',
            '240 Battle Square',
            'Dallas',
            'TX',
            '75202',
            'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80'
        ),
        (
            'Lure Lagoon',
            '88 Ripple Loop',
            'Dallas',
            'TX',
            '75204',
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
        ),
        (
            'Hatchery Station',
            '412 Incubator Street',
            'Dallas',
            'TX',
            '75206',
            'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80'
        )
`

const seedEventsTable = `
    INSERT INTO events (title, date, time, image, location_id)
    VALUES
        (
            'Community Catch Walk',
            '2026-07-12',
            '18:30',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
            1
        ),
        (
            'Buddy Photo Sprint',
            '2026-07-20',
            '10:00',
            'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=80',
            1
        ),
        (
            'Legendary Raid Hour',
            '2026-08-03',
            '19:00',
            'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80',
            2
        ),
        (
            'Team Battle Meetup',
            '2026-06-14',
            '16:00',
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
            2
        ),
        (
            'Lure Drop Picnic',
            '2026-08-17',
            '13:30',
            'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
            3
        ),
        (
            'Night Safari Search',
            '2026-09-05',
            '20:00',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
            3
        ),
        (
            'Egg Hatch Loop',
            '2026-07-26',
            '09:30',
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
            4
        ),
        (
            'Stardust Cleanup Crew',
            '2026-06-01',
            '17:00',
            'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
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
