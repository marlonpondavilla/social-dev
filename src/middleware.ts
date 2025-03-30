import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  const isPublicPath = path === '/login' || path === '/signup' || path === '/admin';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/profile", "/login", "/signup", "/admin"],
};
