const API_BASE_URL = '/api/locations'

const getJson = async (url) => {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
    }

    return response.json()
}

const getAllLocations = async () => {
    return getJson(API_BASE_URL)
}

const getLocationById = async (id) => {
    return getJson(`${API_BASE_URL}/${id}`)
}

export default {
    getAllLocations,
    getLocationById
}
