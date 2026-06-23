import express from 'express'
import {
    getAllLocations,
    getLocationById
} from '../controllers/locations.js'

const router = express.Router()

// COPY/PASTE HERE, STEP 4:
// Define the location API routes that call your controller functions.
// These examples match the frontend services in client/src/services/LocationsAPI.jsx.
router.get('/', getAllLocations)
router.get('/:id', getLocationById)

export default router
