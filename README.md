# Restaurant App (Vue 3)

A simple Vue 3 + Vue Router 4 + Axios front‑end to manage restaurants. You can sign up/login (stored in localStorage), list restaurants, add a new one, and update an existing one via a REST API (e.g., json‑server).

## Live demo

https://resto-project-liard.vercel.app/

## Tech stack

- Vue 3 (Options API)
- Vue Router 4
- Axios
- Vue CLI 5

## Features

- Authentication stub (Sign Up / Login) using localStorage key `user-info`
- Home page listing all restaurants
- Add Restaurant form
- Update Restaurant form (navigates with route param `/update/:id` and prefills from API)

## Prerequisites

- Node.js 16+ and npm

## Getting started

1) Install dependencies

```bash
npm install
```

2) Start a mock REST API (json-server)

This project expects an API at `http://localhost:3000`. The quickest way is using json‑server.

Install (one-time):

```bash
# As a dev dependency (recommended)
npm install -D json-server
```

Create a file `db.json` at the project root with sample data:

```json
{
  "restaurants": [
    { "id": 1, "name": "Cafe Goodluck", "address": "MG Road", "contact": "+91-9999999999" },
    { "id": 2, "name": "Spice Route", "address": "Park Street", "contact": "+91-8888888888" }
  ]
}
```

Run json‑server on port 3000:

```bash
npx json-server --watch db.json --port 3000
```

Common endpoints:

- GET `http://localhost:3000/restaurants`
- GET `http://localhost:3000/restaurants/:id`
- POST `http://localhost:3000/restaurants`
- PUT/PATCH `http://localhost:3000/restaurants/:id`

3) Run the Vue dev server

```bash
npm run serve
```

Open http://localhost:8080 in your browser.

## App routes

- `/` → Home (list restaurants)
- `/add` → AddRestaurant
- `/update/:id` → UpdateRestaurant (prefills the form using the `id` route param)
- `/login` → Login
- `/signup` → SignUp

## How Update works

- From Home, click Update on a row to navigate to `/update/:id`.
- The Update page reads `this.$route.params.id`, fetches that record from `GET /restaurants/:id`, and binds the response to the form via `v-model`.
- Submit sends a PUT/PATCH to `/restaurants/:id`, then usually navigates back to Home.

## Project structure

```
public/
  index.html
src/
  main.js
  routes.js
  App.vue
  components/
    Header.vue
    Home.vue
    AddRestaurant.vue
    UpdateRestaurant.vue
    Login.vue
    SignUp.vue
```

## Scripts

- `npm run serve` → Start Vue dev server
- `npm run build` → Production build
- `npm run lint` → Lint with ESLint

## Troubleshooting

- If you get a redirect to SignUp when opening a page, ensure `localStorage.setItem('user-info', JSON.stringify({ name: 'Your Name' }))` is set by your Login/SignUp flow.
- If `axios` calls fail, verify json‑server is running on port 3000 and that `db.json` has a `restaurants` array.
- Port conflicts: change the json‑server port (e.g., `--port 3001`) and update the axios base URL in components accordingly.

## Notes

- This project uses direct axios calls in components. For larger apps, consider extracting an API layer and using environment variables for base URLs.
- No backend auth is implemented; Login/SignUp manage only a localStorage flag.
