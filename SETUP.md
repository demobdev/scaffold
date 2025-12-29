# ScaffoldUI Setup & Execution Guide

This document summarizes the critical configurations and fixes applied to make ScaffoldUI executable and production-ready.

## Environment Variables (.env)

The following variables are **REQUIRED** for local and production environments:

### Database & Auth
- `DATABASE_URL`: Supabase PostgreSQL connection string.
- `KINDE_CLIENT_ID`, `KINDE_CLIENT_SECRET`, `KINDE_ISSUER_URL`: Auth configuration from Kinde.
- `KINDE_SITE_URL`, `KINDE_POST_LOGIN_REDIRECT_URL`, `KINDE_POST_LOGOUT_REDIRECT_URL`: Redirect URLs.

### AI & API Providers
- `OPENROUTER_API_KEY`: For Gemini and other AI models.
- `V0_API_KEY`: For frontend generation via v0-sdk.
- `UNSPLASH_ACCESS_KEY`: For image searches.

### Stripe Integration
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Public key for the frontend.
- `STRIPE_SECRET_KEY`: Private key for the backend.
- `STRIPE_WEBHOOK_SECRET`: Secret for validating Stripe webhooks.

### Inngest
- `INNGEST_EVENT_KEY`, `INNGEST_SIGNING_KEY`: Required for production background jobs.

## Critical Build Fixes

1.  **Stripe Fallback**: The Stripe client now includes a fallback key `sk_test_12345` to prevent build-time crashes when environment variables aren't available during static analysis.
2.  **Dynamic Routes**: The `/api/stripe` route is marked as `force-dynamic` to prevent Next.js from attempting to statically generate it without keys.
3.  **Suspense Boundaries**: Pages using `useSearchParams` (like `/project/new`) are wrapped in `<Suspense>` to comply with Next.js client-side rendering requirements.

## Troubleshooting

### Inngest "User not found"
If you see `AI_APICallError: User not found` in production logs, ensure that the `userId` is correctly passed in the event payload. Background jobs cannot access browser-based session cookies; they must receive the ID explicitly from the event that triggered them.

### Mobile UI Issues
- **Header Overlap**: The canvas header uses `sticky top-0`. Ensure the parent container has correct padding.
- **Slide Navigation**: Ensure the slide selector and download buttons are not obscured by floating UI elements.
