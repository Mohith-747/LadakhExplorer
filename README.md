# Ladakh Tourism Website

An interactive travel and tourism website showcasing Ladakh, India with detailed information about places to visit, local cuisine, and activities.

## Features

- Information about places to visit in Ladakh
- Local cuisine section
- Accommodation options
- Adventure activities 
- Photo gallery
- Travel tips

## Tech Stack

- React
- TypeScript
- Express
- Tailwind CSS
- Shadcn/UI

## Deployment Instructions

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/ladakh-tourism.git
   cd ladakh-tourism
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

### Production Deployment

1. Build the project
   ```bash
   npm run build
   ```

2. Start the production server
   ```bash
   npm run start
   ```

### Important Deployment Notes

- Ensure `NODE_ENV` is set to `production` in your deployment environment
- The server will use the `PORT` environment variable if available, otherwise default to port 5000
- For platforms like Heroku, Render, or Netlify, the provided Procfile should work without modifications

## Environment Variables

- `NODE_ENV`: Set to `production` for deployment
- `PORT`: (Optional) Port on which the server will run, defaults to 5000