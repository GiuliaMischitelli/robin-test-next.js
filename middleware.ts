import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.headers.get('x-forwarded-proto') !== 'https') {
    const url = request.nextUrl;
    url.protocol = 'https:';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}