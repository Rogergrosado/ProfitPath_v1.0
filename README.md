# ProfitPath

ProfitPath is a demo application consisting of a small Node.js/Express backend and a simple frontend used to experiment with authentication and third party integrations. The backend exposes a few API routes secured with Firebase authentication and connects to a PostgreSQL database through Prisma. The frontend provides a minimal interface for testing login and token retrieval from Firebase.

## Project Structure

- **backend** – Express server with Firebase admin SDK and Prisma.
- **frontend** – Static HTML/JS demo using Firebase client SDK.

## Setup

1. Clone the repository and install dependencies for both apps:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. Create environment files for each app. See the sections below for the required variables.
3. Start the development servers using the provided npm scripts.

## Environment Variables

### Backend (`backend/.env`)
The server expects the following variables:

- `DATABASE_URL` – PostgreSQL connection string.
- `FIREBASE_PROJECT_ID` – Firebase project identifier.
- `FIREBASE_CLIENT_EMAIL` – Firebase client email used by the admin SDK.
- `FIREBASE_PRIVATE_KEY` – Private key for the Firebase service account.

### Frontend (`frontend/.env` or `.env.local`)
These variables configure the Firebase client and third‑party APIs:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- `SELLER_ID`, `MWS_AUTH_TOKEN`, `AWS_ACCESS_KEY`, `AWS_SECRET_KEY`
- `UPS_USERNAME`, `UPS_PASSWORD`, `UPS_ACCESS_KEY`
- `DATABASE_URL` – if the frontend needs database access
- `PORT` – port for the backend server when running locally

Use `frontend/.env.example` as a reference when creating your own environment file.

## Development Workflow

1. **Backend**
   - Run `npm run dev` in `backend/` to start the server with automatic reload via nodemon.
   - Use `npm start` for production to run `index.js` directly.
2. **Frontend**
   - Open `frontend/index.html` in a browser for a quick test interface, or extend the app as needed.
3. The backend listens on the port specified by the `PORT` variable (defaults to `5000`). Requests to `/api/auth` require a valid Firebase token.

## License

This project is provided for demonstration purposes without any warranty.

