import { env } from '@/env';
import { internationalizationMiddleware } from '@repo/internationalization/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  // matcher tells Next.js which routes to run the middleware on. This runs the
  // middleware on all routes except for static assets and Posthog ingest
  matcher: ['/((?!_next/static|_next/image|ingest|favicon.ico).*)'],
};

const middleware = async (request: NextRequest) => {
  const i18nResponse = internationalizationMiddleware({
    headers: request.headers,
    nextUrl: request.nextUrl
  });
  if (i18nResponse) {
    return i18nResponse;
  }

  // Skip heavy security checks if not configured
  if (!env.ARCJET_KEY) {
    return NextResponse.next();
  }

  // Lazy load security modules only when needed
  try {
    const { secure } = await import('@repo/security');
    
    await secure(
      [
        // See https://docs.arcjet.com/bot-protection/identifying-bots
        'CATEGORY:SEARCH_ENGINE', // Allow search engines
        'CATEGORY:PREVIEW', // Allow preview links to show OG images
        'CATEGORY:MONITOR', // Allow uptime monitoring services
      ],
      request
    );

    return NextResponse.next();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Access denied';

    return NextResponse.json({ error: message }, { status: 403 });
  }
};

export default middleware;
