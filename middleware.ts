import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get('admin-auth')?.value === 'true';

  if (req.nextUrl.pathname.startsWith('/dashboard') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};
