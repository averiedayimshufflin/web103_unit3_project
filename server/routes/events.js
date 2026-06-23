import express from 'express'
import {
    getAllEvents,
    getEventById,
    getEventsByLocationId
} from '../controllers/events.js'

const router = express.Router()

// COPY/PASTE HERE, STEP 4:
// Define the event API routes that call your controller functions.
// These examples match the frontend services in client/src/services/EventsAPI.jsx.
router.get('/', getAllEvents)
router.get('/location/:locationId', getEventsByLocationId)
router.get('/:id', getEventById)

export default router
