// COPY/PASTE HERE, STEP 6:
// Put all frontend fetch calls for locations in this file.
// These paths should match the routes you set up in server/routes/locations.js.

const API_BASE_URL = '/api/locations'

const getAllLocations = async () => {
    const response = await fetch(API_BASE_URL)
    return response.json()
}

const getLocationById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`)
    return response.json()
}

export default {
    getAllLocations,
    getLocationById
}
