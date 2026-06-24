# Palette Plaza

Palette Plaza is an art-themed virtual community space. Visitors can choose one of four art locations on the map, view that location's events, or browse all events with a location filter.

## Setup

1. Run `npm install`.
2. Copy `server/.env.example` into `server/.env`.
3. Paste your Render PostgreSQL connection values into `server/.env`.
4. Run `npm run reset` to create and seed the `locations` and `events` tables.
5. Run `npm run dev` to start the React frontend and Express API.

## Routes

- `/` shows the visual location picker.
- `/canvas-courtyard` shows Canvas Courtyard events.
- `/indigo-print-studio` shows Indigo Print Studio events.
- `/sculpture-garden` shows Sculpture Garden events.
- `/lightbox-gallery` shows Lightbox Gallery events.
- `/events` shows all events with a location filter.
