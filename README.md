# Spotify Clone

A minimal full‑stack Spotify‑like app with a modern UI and a simple API.

## Features
- Core playback: play/pause, next/previous, seek, volume control
- Library: playlists, liked tracks, search and filtering
- Authentication: protected routes with JWT/cookies
- Responsive UI: mobile, tablet, desktop
- Server pagination and basic caching for scalable browsing
- Production‑ready basics: env vars, CORS, and deploy configs

## Tech Stack
- Frontend: Vite + React, TypeScript, Tailwind CSS
  - React for component‑based UI; Vite for fast dev/build
  - Tailwind for utility‑first styling and responsive design
  - TypeScript for safer, self‑documenting code
- Backend: Node.js with Express/Fastify (TypeScript)
  - REST API for auth, playlists, and tracks
  - CORS and rate‑limit friendly middleware setup
- Database: MongoDB (Atlas/local) with Mongoose (or similar ODM)
  - Collections for users, playlists, tracks, likes
  - Flexible schema for rapid iteration

## Project Structure
```
frontend/   # Web app
backend/    # API server
