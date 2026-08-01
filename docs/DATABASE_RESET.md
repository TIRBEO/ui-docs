# Database Reset Guide

## Development Reset

This guide describes how to reset the development database for the Tirbeo platform.

### Prerequisites

- Docker and Docker Compose installed
- Node.js 18+ and pnpm 9+ installed

### Steps

1. **Stop dependent services**
   ```bash
   docker compose down
   ```

2. **Remove old data**
   ```bash
   rm -rf apps/api/prisma/migrations/20260730000001_init
   ```

3. **Reset the Prisma migration history**
   ```bash
   cd apps/api
   pnpm prisma migrate reset --force
   ```

4. **Apply clean migrations**
   ```bash
   pnpm prisma migrate dev --name init
   ```

5. **Generate Prisma client**
   ```bash
   pnpm prisma generate
   ```

6. **Seed development data**
   ```bash
   pnpm seed:defaults
   ```

7. **Verify the database**
   ```bash
   pnpm db:push
   ```

### Development Credentials (Generated After Seed)

After running the seed script, the following development credentials are created:

- **Organization**: Tirbeo Dev (slug: `tirbeo-dev`)
- **Admin User**: admin@tirbeo.dev (password: set during seed)
- **Member User**: member@tirbeo.dev (password: set during seed)

⚠️ **Never commit real credentials to source control.**

### Environment Variables Required

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required variables:
- `DATABASE_URL` — PostgreSQL connection string
- `REDIS_URL` — Redis connection string
- `JWT_SECRET` — Random secret for JWT signing
- `NEXT_PUBLIC_APP_DOMAIN` — Application domain
- `NEXT_PUBLIC_API_URL` — API base URL

### Safety Checks

The reset script (`scripts/reset-dev-db.sh`) includes safety checks:
- Only runs against databases with "dev" or "localhost" in the URL
- Requires explicit confirmation before proceeding
- Never runs against production-like URLs

### Production Database

**NEVER** run the reset process against a production database. The reset process is designed for development and staging environments only.

For production database maintenance, follow the procedures documented in `DEPLOYMENT.md`.
