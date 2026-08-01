# Tirbeo Full Rebuild — Audit Report

**Date**: 2026-07-29
**Status**: Pre-rebuild inspection complete
**Scope**: Full database + application reset (development/staging only)

---

## 0.1 Repository Detection

| Item | Value |
|------|-------|
| Package manager | pnpm (v9.15.0) |
| Monorepo tool | Turborepo (v2.3.0) |
| Root workspace | `pnpm-workspace.yaml` — apps/*, packages/*, services/* |
| Language | TypeScript (v5.6.0) |
| Build system | Turborepo + Next.js |

## 0.2 Framework Detection

| App | Framework | Version |
|-----|-----------|---------|
| api | Next.js (App Router) | ^15.1.0 |
| accounts | Next.js (App Router) | ^15.1.0 |
| dashboard | Next.js (App Router) | ^15.1.0 |
| admin | Next.js (App Router) | ^15.1.0 |
| forms | Next.js (App Router) | ^15.1.0 |
| support | Next.js (App Router) | ^15.1.0 |
| landing | Vite + React | — |

## 0.3 Backend Detection

- **API server**: Next.js API routes (`apps/api/app/api/[[...slug]]/route.ts`)
- **Custom HTTP server**: `apps/api/server.ts` (Node.js http + Next.js)
- **WebSocket**: `apps/api/lib/ws/server.ts` (ws library)

## 0.4 ORM / Database Library

- **ORM**: Prisma (v6.0.0)
- **Database driver**: PostgreSQL via `@prisma/client`
- **Migration tool**: `prisma migrate` / `prisma db push`
- **Schema file**: `apps/api/prisma/schema.prisma` (2080 lines, 70+ models)

## 0.5 Current Database Configuration

- **Primary DB**: PostgreSQL (Supabase) — connection string in `apps/api/.env`
- **Redis**: Upstash Redis — connection string in `apps/api/.env`
- **Migration history**: 3 migration files in `apps/api/prisma/migrations/`
  - `001_api_schema.sql` (430 lines) — old schema
  - `002_dashboard_queries.sql` (309 lines) — dashboard queries
  - `20260729150422_init/` — latest Prisma migration

## 0.6 Existing Migrations

| File | Description | Status |
|------|-------------|--------|
| `001_api_schema.sql` | Original API schema (WorkspaceRole enum, users, workspaces, memberships, sessions, routes, logs, blocklist, site_config, app_roles, user_roles, otp, signup_otp, email_config, email_template) | **OBSOLETE** |
| `002_dashboard_queries.sql` | Dashboard-specific SQL queries | **OBSOLETE** |
| `20260729150422_init/` | Latest Prisma migration with 70+ models | **OBSOLETE** |

## 0.7 Database Schemas / Models (Current Prisma Schema)

The current schema has 70+ models including:

- **User & Identity**: User, Session, Passkey, LinkedAccount, LoginEvent
- **Auth**: Otp, RecoveryCode, TwoFactor, SignupOtp
- **RBAC**: AppRole, UserRole
- **Organizations**: Workspace, Membership
- **Applications**: App, AppOAuthClient
- **Content**: Blog, BlogVersion, BlogCategory, BlogTag, BlogComment, Page, PageVersion, PageComponent
- **Support**: Ticket, TicketMessage, TicketAttachment, SLA, SupportQueue, SupportAgent
- **Security**: SecurityEvent, AuditEvent, ContentReport
- **Billing**: Subscription, Plan, Invoice, PaymentMethod
- **Social**: Follow, Post, Comment, Like, Bookmark, Community, Message, Activity
- **System**: FeatureFlag, Setting, SettingOverride, Incident, SystemService, Job
- **Other**: EmailConfig, EmailTemplate, Subscriber, Integration, ThemeConfig, District, ApiKey, UserMailbox, ReservedAddress, UserApp, PasskeyChallenge, Form, FormVersion, FormField, FormFieldOption, FormCondition, Response, FormCollaborator, FormWebhook, FormNotification, FormView, VerificationRequest, EmailPreference, Notification, NotificationPreference, ProfileView, Project, ProjectTag, Achievement, Startup, Message, AuthorizationCode, AccessToken, RefreshToken, OAuthConsent

## 0.8 Authentication Code

| File | Description |
|------|-------------|
| `apps/api/lib/authHandlers.ts` | Login, signup, logout, OTP, password reset, 2FA, magic link, OAuth, CLI token |
| `apps/api/lib/auth/jwt.ts` | JWT signing/verification (HS256, `jose` library) |
| `apps/api/lib/auth/session.ts` | Session creation, revocation, cookie management, CSRF |
| `apps/api/lib/auth/otp.ts` | OTP generation, storage, verification |
| `apps/api/lib/auth/password.ts` | Argon2id hashing and verification |
| `apps/api/lib/auth/rate-limit.ts` | Redis + in-memory rate limiting |
| `apps/api/lib/auth/api-key.ts` | API key authentication |
| `apps/api/lib/auth/totp.ts` | TOTP generation and verification (otplib) |
| `apps/api/lib/auth/password-reset.ts` | Password reset flow |
| `apps/api/lib/auth/signup-otp.ts` | Signup OTP flow |
| `apps/api/lib/auth/suspicious-activity.ts` | Suspicious login detection |
| `apps/api/lib/auth/turnstile.ts` | Cloudflare Turnstile CAPTCHA |
| `apps/api/lib/session.ts` | Session middleware, role hierarchy, requireAdmin/requireRole |
| `apps/api/middleware.ts` | Next.js middleware — CORS, CSRF, rate limiting, auth check |

**Auth architecture**: Custom JWT with DB-backed sessions. Cookie-based (`__session`) for web apps, Bearer token for API keys. Two separate auth systems exist: Supabase Auth (accounts app) and custom JWT (API app).

## 0.9 Existing Dashboard/Admin/Account Routes

### Admin App (`apps/admin/app/(admin)/`)
- account, alerts, analytics, apps, billing, data, devices, directory, health, integrations
- media, moderation, monitor, reporting, reserved-addresses, routes, rules
- security (access-control, audit, authentication, policies)
- settings (2fa, accounts, admin, api, brand, dashboard, domains, email, landing, layout, notifications, roles, shared, theme)
- support, users, workspaces

### Dashboard App (`apps/dashboard/app/(dashboard)/`)
- activity, apps, forms, help, notifications, settings (account, apps, notifications, preferences, privacy, profile, security)

### Accounts App (`apps/accounts/app/`)
- account-recovery, auth, authorize, callback, challenge, consent, error, forgot-password, login, logout, mfa, passkey, recovery, reset-password, session-expired, signup, suspicious-login, verify, verify-email

### API App (`apps/api/app/api/`)
- admin/* (2fa, activity, analytics, audit, check-setup, email, heartbeat, layout-config, login, me, media, moderation, monitor, notifications, preferences, roles, routes, search, seed, site-config, stats, theme, users, workspaces)
- newsletter/subscribe
- public/landing, landing-config, theme
- `[[...slug]]` catch-all route (1155 lines, 80+ route handlers)

## 0.10 Environment Files

| File | Contains Credentials? |
|------|----------------------|
| `.env` (root) | YES — Supabase URL, key, DATABASE_URL, REDIS_URL, JWT_SECRET |
| `apps/api/.env` | YES — DATABASE_URL (Supabase), REDIS_URL (Upstash), JWT_SECRET |
| `apps/api/.env.local` | YES — overrides |
| `apps/api/.env.prod` | YES — production overrides |
| `apps/admin/.env` | YES — API URL |
| `apps/accounts/.env` | YES — Supabase URL, key |
| `.env.example` | NO — template with placeholders |
| `apps/api/.env.example` | NO — template with placeholders |

## 0.11 Deployment Configuration

| Item | Value |
|------|-------|
| Platform | Vercel |
| DNS | Cloudflare |
| CDN/WAF | Cloudflare |
| Each app | Separate Vercel project, same monorepo |
| Framework | Next.js |
| Build command | `npx prisma generate && npx next build` |
| Database | PostgreSQL (Supabase) |
| Redis | Upstash (serverless) |
| `vercel.json` | Present in root, api, admin, accounts, dashboard, forms, landing, support |

## 0.12 Infrastructure

- `infrastructure/` directory exists but is **empty** — no Docker, nginx, or deployment configs

## 0.13 Services Directories

- `services/api/` — **empty**
- `services/audit/` — **empty**
- `services/jobs/` — **empty**
- `services/notifications/` — **empty**

## 0.14 Shared Packages

| Package | Status | Description |
|---------|--------|-------------|
| `@tirbeo/ui` | Active | Design system components + Tailwind theme |
| `@tirbeo/auth` | Active | Supabase-based auth provider (accounts app only) |
| `@tirbeo/database` | Active | Supabase client + types + settings schemas |
| `@tirbeo/utils` | Active | Domain routing, phone validation, BS dates, redis mock |
| `@tirbeo/config` | Active | Shared TS/ESLint configs |
| `@tirbeo/types` | Active | Shared TypeScript types |
| `@tirbeo/permissions` | Active | RBAC/ABAC permission engine |
| `@tirbeo/api-client` | Active | API client class |
| `@tirbeo/charts` | Active | Chart components (recharts wrapper) |
| `@tirbeo/icons` | Active | Lucide-react icon re-exports |

## 0.15 Accounts App Local Packages

The `apps/accounts/packages/` directory has its own local copies of auth, config, database, ui, utils — duplicating the root-level packages.

## 0.16 Key Issues Identified

1. **Two separate auth systems**: Supabase Auth (accounts app) vs custom JWT (API app) — they do not interoperate
2. **`packages/utils/src/workspaceCache.ts`** imports `prisma` from `@tirbeo/database`, but that package exports a Supabase client, not a Prisma client — runtime failure
3. **`apps/api/lib/formHandlers.ts`** `getUserId()` reads `(req as any).session` which is never set — broken
4. **`apps/api/lib/contentHandlers.ts`** spreads request body directly into Prisma create — allows overwriting arbitrary fields
5. **Hardcoded Supabase logo URL with JWT token** in `apps/api/lib/email.ts`
6. **`apps/api/next.config.js`** has `typescript.ignoreBuildErrors: true` — masks all TS errors
7. **`services/*` directories are empty** — no service layer exists
8. **`infrastructure/` directory is empty** — no Docker/nginx configs
9. **`apps/dashboard/pages/` directory is empty** — mixed router confusion
10. **`apps/accounts/packages/` duplicates root-level packages**
11. **No tenant isolation** in the current schema — organizations exist but cross-org access is not enforced at DB level
12. **No audit trail enforcement** — audit events are created manually in handlers, not automatically
13. **No notification delivery system** — notifications are created but not delivered
14. **No OAuth 2.0 / OIDC** — custom auth protocol instead of standards-based
15. **No API type generation** — API contracts are not typed

## 0.17 Supabase Migration

- `supabase/migrations/010_unified_platform_schema.sql` (1236 lines) — a unified schema migration that drops all old tables and creates a fresh schema. This is the most recent Supabase migration but it is NOT the Prisma schema.

## 0.18 Documentation

| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent memory bank — project overview, tech stack, conventions |
| `API.md` | API reference documentation |
| `architecture.md` | High-level architecture overview |
| `DATABASE.md` | Database design documentation |
| `DEPLOYMENT.md` | Deployment configuration |
| `RBAC.md` | Role-based access control documentation |
| `SECURITY.md` | Security architecture documentation |
| `SPIRAL_PLAN.md` | Rebuild spiral plan (7 spirals) |
| `docs/DASHBOARD_REBUILD.md` | Dashboard rebuild plan (12 phases) |
| `docs/archive-schema.prisma` | Archived Prisma schema (2080 lines) |

---

## Rebuild Plan Summary

This audit confirms the repository is in a state where a full rebuild is appropriate:

- The old schema has accumulated 70+ models with inconsistent patterns
- Two separate auth systems exist without interoperability
- No service layer exists
- No infrastructure configuration exists
- The current schema lacks tenant isolation, proper audit trails, and notification delivery

The rebuild will create a clean foundation following the 25-phase plan.
