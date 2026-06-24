# WEB103 Project 3 - CatchQuest GO

Submitted by: **Averie Ahn**

About this web app: **CatchQuest GO is a Pokemon Go-inspired community event finder where users can explore local creature-catching meetups by location. Users can click on a visual game map to visit different meetup zones, view events for each zone, browse all events, filter events by location, and see countdowns for upcoming or past events.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [ X] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X ] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command `SELECT * FROM events;` to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.*
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Added a Pokemon Go-inspired concept with four unique locations: Beacon Park, Raid Plaza, Lure Lagoon, and Hatchery Station.
- [x] Added fallback meetup event data so the app can still be previewed locally if the Render database is temporarily unreachable.
- [x] Added a database reset script that creates and seeds both `locations` and `events` tables.
- [x] Added styled event cards with images, location names, dates, times, and hover overlays.
- [x] Added a custom game-map graphic and responsive styling so the map and event pages work on smaller screens.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<!-- Replace this placeholder with your completed GIF after recording the walkthrough. -->
<img src='hhttps://imgur.com/a/PN1ZhVp' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Kap**

Walkthrough should show:

- The CatchQuest GO title on the homepage.
- The visual location map with clickable meetup zones.
- Clicking each location and navigating to its unique URL.
- Events displayed for the selected location.
- The all-events page and location filter.
- Countdown text and past-event styling.
- Render dashboard showing the Postgres database is available.
- A terminal or database shell showing `SELECT * FROM events;`.

## Notes

The main challenge was connecting the React frontend, Express backend, and PostgreSQL data flow so that each location page only displays events associated with that location. Another challenge was making the visual map obvious and stable; the location buttons were updated so they stay visible instead of disappearing on hover.

The app includes fallback data for local previewing, but the project is still set up to use the Render PostgreSQL database through the environment variables in `server/.env`.

## Setup

1. Run `npm install`.
2. Copy `server/.env.example` into `server/.env`.
3. Paste your Render PostgreSQL connection values into `server/.env`.
4. Run `npm run reset` to create and seed the `locations` and `events` tables.
5. Run `npm run dev` to start the React frontend and Express API.

## Routes

- `/` shows the visual location picker.
- `/beacon-park` shows Beacon Park events.
- `/raid-plaza` shows Raid Plaza events.
- `/lure-lagoon` shows Lure Lagoon events.
- `/hatchery-station` shows Hatchery Station events.
- `/events` shows all events with a location filter.

## License

Copyright 2026 Averie Ahn

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
