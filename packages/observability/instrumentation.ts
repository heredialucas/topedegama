import { init } from '@sentry/nextjs';

export const initializeSentry = () => {
  return () => {
    const opts = {
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    };

    if (process.env.NEXT_RUNTIME === 'nodejs') {
      init(opts);
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
      init(opts);
    }
  };
};
