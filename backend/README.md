# WebFusion Experts — Backend

Node.js + Express REST API. Deployed on **Render**.

## Tech Stack
- Node.js
- Express 4
- CORS
- dotenv

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Server health check |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/newsletter` | Subscribe to newsletter |
| POST | `/api/whatsapp` | Log WhatsApp lead |
| GET | `/api/admin/contacts` | Get all contacts |
| GET | `/api/admin/newsletter` | Get all subscribers |
| GET | `/api/admin/whatsapp` | Get all leads |
| DELETE | `/api/admin/contacts/:id` | Delete a contact |
| DELETE | `/api/admin/newsletter/:id` | Delete a subscriber |

## Local Development

```bash
# Install dependencies
npm install

# Edit .env
# Set ALLOWED_ORIGIN=http://localhost:3000 for local dev

# Start server
npm start
# Server runs on http://localhost:5000
```

## Environment Variables

| Variable | Description | Example |
|---|---|---|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `production` |
| `ALLOWED_ORIGIN` | Frontend URL for CORS | `https://your-app.vercel.app` |

## Deploy to Render

1. Push to GitHub
2. Create **Web Service** on [render.com](https://render.com)
3. Connect this repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
5. Add Environment Variables:
   - `NODE_ENV=production`
   - `ALLOWED_ORIGIN=https://YOUR-VERCEL-URL.vercel.app`
6. Deploy!

> ⚠️ After getting Vercel URL, update `ALLOWED_ORIGIN` in Render and redeploy.

## Data Storage

Data is saved in `data/` folder as JSON files:
- `data/contacts.json`
- `data/newsletter.json`  
- `data/whatsapp_leads.json`

> These files are auto-created on first run. They are gitignored.
