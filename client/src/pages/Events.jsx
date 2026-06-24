import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])
    const [selectedLocation, setSelectedLocation] = useState('all')

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            }
            catch (error) {
                throw error
            }
        })()
    }, [])

    const filteredEvents = selectedLocation === 'all'
        ? events
        : events.filter((event) => event.location_id === parseInt(selectedLocation))

    const locations = [...new Map(events.map((event) => [
        event.location_id,
        event.location_name
    ])).entries()]

    return (
        <div className='events'>
            <header className='events-header'>
                <h2>All Catch Events</h2>

                <select
                    aria-label='Filter events by location'
                    value={selectedLocation}
                    onChange={(event) => setSelectedLocation(event.target.value)}
                >
                    <option value='all'>All locations</option>
                    {
                        locations.map(([id, name]) =>
                            <option key={id} value={id}>{name}</option>
                        )
                    }
                </select>
            </header>

            <main>
            {
                filteredEvents && filteredEvents.length > 0 ? filteredEvents.map((event) =>
                    <Event
                        key={event.id}
                        id={event.id}
                    />
                ) : <h2>No events found yet!</h2>
            }
            </main>
        </div>
    )
}

export default Events
