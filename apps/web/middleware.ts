import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  // matcher tells Next.js which routes to run the middleware on. This runs the
  // middleware on all routes except for static assets and Posthog ingest
  matcher: ['/((?!_next/static|_next/image|ingest|favicon.ico).*)'],
};

// Ultra-minimal middleware for i18n - Spanish only
// Removed ALL heavy dependencies to stay under 1MB edge function limit
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only Spanish locale based on languine.json config
  const defaultLocale = 'es';
  
  // Check if pathname already has locale prefix
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    return NextResponse.next();
  }

  // Always redirect to Spanish locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}
