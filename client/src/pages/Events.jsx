import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                // COPY/PASTE HERE, STRETCH FEATURE:
                // This pulls every event for the optional all-events page.
                // You can add filtering or sorting after this data loads.
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            }
            catch (error) {
                throw error
            }
        })()
    }, [])

    return (
        <div className='events'>
            {
                events && events.length > 0 ? events.map((event) =>
                    <Event
                        key={event.id}
                        id={event.id}
                    />
                ) : <h2>No events found yet!</h2>
            }
        </div>
    )
}

export default Events
