# WebFusion Experts — Frontend

React + Vite portfolio frontend. Deployed on **Vercel**.

## Tech Stack
- React 18
- Vite
- React Router DOM
- Framer Motion
- Bootstrap 5

## Local Development

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env and set VITE_API_URL=http://localhost:5000/api

# Start dev server
npm run dev
```

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `https://webfusion-backend.onrender.com/api` |

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add environment variable: `VITE_API_URL` = your Render backend URL
4. Deploy!

> ✅ `vercel.json` already configured for React Router SPA routing.
