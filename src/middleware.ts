import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect the /portal routes
  if (request.nextUrl.pathname.startsWith('/portal')) {
    // DO NOT redirect if we are already on the login page
    if (request.nextUrl.pathname === '/portal/login') {
      return NextResponse.next();
    }

    const authCookie = request.cookies.get('portal_auth');
    const validPassword = process.env.PORTAL_PASSWORD || 'KemiPamatee#1';
    
    // Check if authenticated
    if (!authCookie || authCookie.value !== validPassword) {
      return NextResponse.redirect(new URL('/portal/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/portal/:path*',
};
