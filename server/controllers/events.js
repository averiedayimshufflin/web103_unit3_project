import { pool } from '../config/database.js'

// COPY/PASTE HERE, STEP 3:
// Add controller functions for the events table.
// These functions run SQL queries and send JSON back to the frontend.

export const getAllEvents = async (_, res) => {
    try {
        // COPY/PASTE HERE:
        // Replace this placeholder query with your events query.
        // const results = await pool.query('SELECT * FROM events ORDER BY date, time')
        // res.status(200).json(results.rows)
        res.status(501).json({ message: 'Paste your getAllEvents controller code here.' })
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export const getEventById = async (req, res) => {
    try {
        // COPY/PASTE HERE:
        // Use req.params.id to select one event from the events table.
        res.status(501).json({ message: 'Paste your getEventById controller code here.' })
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export const getEventsByLocationId = async (req, res) => {
    try {
        // COPY/PASTE HERE:
        // Use req.params.locationId to select all events for one location.
        res.status(501).json({ message: 'Paste your getEventsByLocationId controller code here.' })
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}
