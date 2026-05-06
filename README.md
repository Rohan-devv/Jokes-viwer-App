

# Jokes Viewer Application

A simple React + Vite web app that fetches and displays random jokes from the `Random Jokes API`.

## Live Demo

> Add your deployed project URL here once available.

## Features

- Fetches jokes from the public API: `https://api.freeapi.app/api/v1/public/randomjokes`
- Displays jokes in a readable card-style layout
- Allows users to browse through fresh jokes in an engaging interface
- Responsive design for desktop and mobile

## How it works

1. The app sends a request to the Random Jokes API.
2. It receives a list of jokes in JSON format.
3. The UI renders each joke with a clear title and punchline.
4. Users can scroll through the joke list to browse content.

## Installation

```bash
cd "Jokes Viewer Application"
npm install
```

> This project uses the Vite React template and may also work with `pnpm install` if you prefer.

## Running Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

## Project Structure

- `src/App.jsx` — main application component and joke fetching logic
- `src/main.jsx` — React entry point
- `src/App.css` — component styling for the jokes viewer
- `public/` — static assets and app manifest

## API

This app uses the public endpoint:

- `https://api.freeapi.app/api/v1/public/randomjokes`

If the API rate limits or changes, the app may require updates to the request handling logic.

## Notes

- Styling can be customized using CSS or Tailwind CSS.
- The current implementation focuses on a clean and simple browsing experience.

## License

This project is available under the MIT License.

