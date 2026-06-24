const API_BASE_URL = '/api/events'

const getJson = async (url) => {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
    }

    return response.json()
}

const getAllEvents = async () => {
    return getJson(API_BASE_URL)
}

const getEventsById = async (id) => {
    return getJson(`${API_BASE_URL}/${id}`)
}

const getEventsByLocationId = async (locationId) => {
    return getJson(`${API_BASE_URL}/location/${locationId}`)
}

export default {
    getAllEvents,
    getEventsById,
    getEventsByLocationId
}
