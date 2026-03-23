# 2BRented

A full-stack bike rental platform where customers can browse, filter, and book bikes across major Indian cities. Built with React, Express, PostgreSQL (Supabase), and deployed on Vercel.

## Features

- **Customers** — Browse bike catalogue with filters (price, type, brand, fuel, rating, km, age), book bikes, manage bookings, mark favourites
- **Owners** — List bikes for rent, manage their fleet via a dedicated dashboard
- **Managers** — Admin dashboard to manage customers, owners, and queries
- **Payments** — Razorpay integration for online payments
- **Image uploads** — AWS S3 (ap-south-1)
- **Auth** — JWT-based auth with bcrypt password hashing, separate login flows per role

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Redux Toolkit, Material UI v5 |
| Backend | Node.js, Express |
| Database | PostgreSQL via Supabase, Prisma ORM |
| Storage | AWS S3 |
| Payments | Razorpay |
| Deployment | Vercel (frontend + backend as separate projects) |

## Project Structure

```
2BRented/
├── src/                    # React frontend
│   ├── pages/              # Page components (Home, BikeCatalogue, BookingSummary, etc.)
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom hooks (useBikes, useBookings, useCustomers, ...)
│   ├── app/                # Redux store + slices
│   └── theme/              # MUI theme config
├── api/                    # Express backend
│   ├── routes/             # auth, bikes, bookings, customers, owners, managers, queries
│   ├── controllers/        # paymentController
│   ├── lib/                # Prisma singleton
│   ├── prisma/             # schema.prisma + migrations
│   └── index.js            # Server entry point
├── public/
└── vercel.json             # Frontend rewrite rules
```

## Local Development

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project (PostgreSQL)
- An AWS S3 bucket (region `ap-south-1`)
- A Razorpay account

### 1. Clone and install

```bash
git clone <repo-url>
cd 2BRented

# Install frontend deps
npm install

# Install backend deps
cd api && npm install
```

### 2. Set up environment variables

Create `api/.env`:

```env
DATABASE_URL=postgresql://postgres.xxxxx:PASSWORD@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:5432/postgres
ACCESS_TOKEN_SECRET=<random 32+ char string>
RAZORPAY_API_KEY=<your Razorpay key_id>
RAZORPAY_API_SECRET=<your Razorpay key_secret>
S3_ACCESS_KEY=<IAM Access Key ID>
S3_SECRET_ACCESS_KEY=<IAM Secret Access Key>
```

### 3. Run migrations and seed

```bash
cd api
npx prisma migrate dev
node seed.js      # optional — loads 42 sample bikes across 6 cities
```

### 4. Start

```bash
# Terminal 1 — backend (from api/)
npm run dev       # runs on :8000

# Terminal 2 — frontend (from root)
npm start         # runs on :3000, proxies /api to :8000
```

## Deployment (Vercel)

The frontend and backend are deployed as **two separate Vercel projects**.

### Backend (`api/`)

```bash
cd api && vercel
```

Set these environment variables in the Vercel project:

| Variable | Value |
|---|---|
| `DATABASE_URL` | Supabase **Transaction pooler** URL (port 6543, `?pgbouncer=true`) |
| `DIRECT_URL` | Supabase **direct** URL (port 5432) |
| `ACCESS_TOKEN_SECRET` | JWT secret |
| `RAZORPAY_API_KEY` | Razorpay key_id |
| `RAZORPAY_API_SECRET` | Razorpay key_secret |
| `S3_ACCESS_KEY` | AWS IAM access key |
| `S3_SECRET_ACCESS_KEY` | AWS IAM secret key |

### Frontend (root)

```bash
vercel
```

The root `vercel.json` rewrites `/api/*` to the backend Vercel URL.

## API Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/customer-signup` | Register customer |
| POST | `/api/customer-login` | Customer login |
| POST | `/api/owner-login` | Owner login |
| POST | `/api/manager-login` | Manager login |
| GET | `/api/bikes` | List bikes (supports filter query params) |
| POST | `/api/bikes` | Add a bike (with image upload) |
| DELETE | `/api/bikes/:id` | Delete a bike |
| GET | `/api/bookings` | Get bookings |
| POST | `/api/bookings` | Create booking |
| DELETE | `/api/bookings/:id` | Cancel booking |
| GET | `/api/customers` | List customers |
| GET | `/api/owners` | List owners |
| POST | `/api/query` | Submit a support query |

## AWS S3 Setup

- Region: `ap-south-1` (Mumbai)
- Disable "Block all public access" on the bucket
- Add a bucket policy for public reads on `s3:GetObject`
- Create an IAM user with `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject` on the bucket

## Notes

- Supabase free tier pauses after ~1 week of inactivity — resume from the dashboard if you get connection errors
- Always use the **Transaction pooler** URL (port 6543) as `DATABASE_URL` on Vercel — the direct connection (port 5432) will exhaust connection limits on serverless
- `DIRECT_URL` is required for `prisma migrate` to work with the pooler
