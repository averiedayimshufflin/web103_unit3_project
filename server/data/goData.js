export const locations = [
    {
        id: 1,
        name: 'Beacon Park',
        address: '101 Trainer Trail',
        city: 'Dallas',
        state: 'TX',
        zip: '75201',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 2,
        name: 'Raid Plaza',
        address: '240 Battle Square',
        city: 'Dallas',
        state: 'TX',
        zip: '75202',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 3,
        name: 'Lure Lagoon',
        address: '88 Ripple Loop',
        city: 'Dallas',
        state: 'TX',
        zip: '75204',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80'
    },
    {
        id: 4,
        name: 'Hatchery Station',
        address: '412 Incubator Street',
        city: 'Dallas',
        state: 'TX',
        zip: '75206',
        image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80'
    }
]

export const events = [
    {
        id: 1,
        title: 'Community Catch Walk',
        date: '2026-07-12',
        time: '18:30',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        location_id: 1
    },
    {
        id: 2,
        title: 'Buddy Photo Sprint',
        date: '2026-07-20',
        time: '10:00',
        image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=80',
        location_id: 1
    },
    {
        id: 3,
        title: 'Legendary Raid Hour',
        date: '2026-08-03',
        time: '19:00',
        image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80',
        location_id: 2
    },
    {
        id: 4,
        title: 'Team Battle Meetup',
        date: '2026-06-14',
        time: '16:00',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
        location_id: 2
    },
    {
        id: 5,
        title: 'Lure Drop Picnic',
        date: '2026-08-17',
        time: '13:30',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
        location_id: 3
    },
    {
        id: 6,
        title: 'Night Safari Search',
        date: '2026-09-05',
        time: '20:00',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
        location_id: 3
    },
    {
        id: 7,
        title: 'Egg Hatch Loop',
        date: '2026-07-26',
        time: '09:30',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
        location_id: 4
    },
    {
        id: 8,
        title: 'Stardust Cleanup Crew',
        date: '2026-06-01',
        time: '17:00',
        image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
        location_id: 4
    }
]

export const eventsWithLocationNames = events.map((event) => ({
    ...event,
    location_name: locations.find((location) => location.id === event.location_id)?.name,
    remaining: `${event.date}T${event.time}`
}))
