import { pool } from '../config/database.js'

// COPY/PASTE HERE, STEP 3:
// Add controller functions for the locations table.
// The home page needs all locations; the detail page needs one location.

export const getAllLocations = async (_, res) => {
    try {
        // COPY/PASTE HERE:
        // Replace this placeholder query with your locations query.
        // const results = await pool.query('SELECT * FROM locations ORDER BY id')
        // res.status(200).json(results.rows)
        res.status(501).json({ message: 'Paste your getAllLocations controller code here.' })
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export const getLocationById = async (req, res) => {
    try {
        // COPY/PASTE HERE:
        // Use req.params.id to select one location from the locations table.
        res.status(501).json({ message: 'Paste your getLocationById controller code here.' })
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}
