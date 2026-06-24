import { pool } from '../config/database.js'
import { eventsWithLocationNames } from '../data/artData.js'

const formatEvent = (event) => {
    const date = event.date instanceof Date ? event.date : new Date(event.date)
    const dateText = date.toISOString().slice(0, 10)

    return {
        ...event,
        date: dateText,
        remaining: `${dateText}T${event.time}`
    }
}

export const getAllEvents = async (_, res) => {
    try {
        if (!process.env.PGHOST) {
            return res.status(200).json(eventsWithLocationNames)
        }

        const results = await pool.query(`
            SELECT events.*, locations.name AS location_name
            FROM events
            JOIN locations ON events.location_id = locations.id
            ORDER BY events.date, events.time
        `)

        res.status(200).json(results.rows.map(formatEvent))
    }
    catch (error) {
        console.warn(`Using fallback events because the database request failed: ${error.message}`)
        res.status(200).json(eventsWithLocationNames)
    }
}

export const getEventById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        if (!process.env.PGHOST) {
            const event = eventsWithLocationNames.find((event) => event.id === id)

            if (!event) {
                return res.status(404).json({ message: 'Event not found' })
            }

            return res.status(200).json(event)
        }

        const results = await pool.query(`
            SELECT events.*, locations.name AS location_name
            FROM events
            JOIN locations ON events.location_id = locations.id
            WHERE events.id = $1
        `, [id])

        if (!results.rows[0]) {
            return res.status(404).json({ message: 'Event not found' })
        }

        res.status(200).json(formatEvent(results.rows[0]))
    }
    catch (error) {
        const id = parseInt(req.params.id)
        const event = eventsWithLocationNames.find((event) => event.id === id)

        if (!event) {
            return res.status(404).json({ message: 'Event not found' })
        }

        console.warn(`Using fallback event because the database request failed: ${error.message}`)
        res.status(200).json(event)
    }
}

export const getEventsByLocationId = async (req, res) => {
    try {
        const locationId = parseInt(req.params.locationId)

        if (!process.env.PGHOST) {
            const locationEvents = eventsWithLocationNames.filter((event) => event.location_id === locationId)
            return res.status(200).json(locationEvents)
        }

        const results = await pool.query(`
            SELECT events.*, locations.name AS location_name
            FROM events
            JOIN locations ON events.location_id = locations.id
            WHERE events.location_id = $1
            ORDER BY events.date, events.time
        `, [locationId])

        res.status(200).json(results.rows.map(formatEvent))
    }
    catch (error) {
        const locationId = parseInt(req.params.locationId)
        const locationEvents = eventsWithLocationNames.filter((event) => event.location_id === locationId)

        console.warn(`Using fallback location events because the database request failed: ${error.message}`)
        res.status(200).json(locationEvents)
    }
}
