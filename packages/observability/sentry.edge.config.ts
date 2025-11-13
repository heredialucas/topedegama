import { init } from '@sentry/nextjs';

init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  // Add your edge-specific Sentry configuration here
  tracesSampleRate: 1.0,
});
