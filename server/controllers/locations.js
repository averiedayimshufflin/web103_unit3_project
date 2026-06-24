import { pool } from '../config/database.js'
import { locations } from '../data/goData.js'

export const getAllLocations = async (_, res) => {
    try {
        if (!process.env.PGHOST) {
            return res.status(200).json(locations)
        }

        const results = await pool.query('SELECT * FROM locations ORDER BY id')
        res.status(200).json(results.rows)
    }
    catch (error) {
        console.warn(`Using fallback locations because the database request failed: ${error.message}`)
        res.status(200).json(locations)
    }
}

export const getLocationById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        if (!process.env.PGHOST) {
            const location = locations.find((location) => location.id === id)

            if (!location) {
                return res.status(404).json({ message: 'Location not found' })
            }

            return res.status(200).json(location)
        }

        const results = await pool.query('SELECT * FROM locations WHERE id = $1', [id])

        if (!results.rows[0]) {
            return res.status(404).json({ message: 'Location not found' })
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        const id = parseInt(req.params.id)
        const location = locations.find((location) => location.id === id)

        if (!location) {
            return res.status(404).json({ message: 'Location not found' })
        }

        console.warn(`Using fallback location because the database request failed: ${error.message}`)
        res.status(200).json(location)
    }
}
