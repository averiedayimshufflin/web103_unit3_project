export const locations = [
    {
        id: 1,
        name: 'Canvas Courtyard',
        address: '101 Mural Way',
        city: 'Dallas',
        state: 'TX',
        zip: '75201',
        image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 2,
        name: 'Indigo Print Studio',
        address: '240 Inkpress Ave',
        city: 'Dallas',
        state: 'TX',
        zip: '75202',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 3,
        name: 'Sculpture Garden',
        address: '88 Bronze Loop',
        city: 'Dallas',
        state: 'TX',
        zip: '75204',
        image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 4,
        name: 'Lightbox Gallery',
        address: '412 Prism Street',
        city: 'Dallas',
        state: 'TX',
        zip: '75206',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    }
]

export const events = [
    {
        id: 1,
        title: 'Community Mural Jam',
        date: '2026-07-12',
        time: '18:30',
        image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80',
        location_id: 1
    },
    {
        id: 2,
        title: 'Open-Air Figure Drawing',
        date: '2026-07-20',
        time: '10:00',
        image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80',
        location_id: 1
    },
    {
        id: 3,
        title: 'Risograph Poster Night',
        date: '2026-08-03',
        time: '19:00',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80',
        location_id: 2
    },
    {
        id: 4,
        title: 'Zine Swap and Staple Party',
        date: '2026-06-14',
        time: '16:00',
        image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=900&q=80',
        location_id: 2
    },
    {
        id: 5,
        title: 'Clay Creatures Workshop',
        date: '2026-08-17',
        time: '13:30',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80',
        location_id: 3
    },
    {
        id: 6,
        title: 'Found Object Sculpture Walk',
        date: '2026-09-05',
        time: '11:00',
        image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=900&q=80',
        location_id: 3
    },
    {
        id: 7,
        title: 'Projection Mapping Night',
        date: '2026-07-26',
        time: '20:30',
        image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80',
        location_id: 4
    },
    {
        id: 8,
        title: 'Tiny Gallery Pop-Up',
        date: '2026-06-01',
        time: '17:00',
        image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
        location_id: 4
    }
]

export const eventsWithLocationNames = events.map((event) => ({
    ...event,
    location_name: locations.find((location) => location.id === event.location_id)?.name,
    remaining: `${event.date}T${event.time}`
}))
