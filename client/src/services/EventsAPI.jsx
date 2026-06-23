// COPY/PASTE HERE, STEP 6:
// Put all frontend fetch calls for events in this file.
// These paths should match the routes you set up in server/routes/events.js.

const API_BASE_URL = '/api/events'

const getAllEvents = async () => {
    const response = await fetch(API_BASE_URL)
    return response.json()
}

const getEventsById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`)
    return response.json()
}

const getEventsByLocationId = async (locationId) => {
    const response = await fetch(`${API_BASE_URL}/location/${locationId}`)
    return response.json()
}

export default {
    getAllEvents,
    getEventsById,
    getEventsByLocationId
}
