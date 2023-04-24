import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;
  
  // If it's the root path, just render it
  
  if (path === "/") {
    return NextResponse.next();
  }
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && (path.includes("/caps") || path.includes("/families") || path === "/protected")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }else if (session && (path === "/login" || path === "/register" || path === "/protected") && session?.role === "cap") {
    return NextResponse.redirect(new URL("/caps", req.url));
  }else if (session && (path === "/login" || path === "/register" || path === "/protected") && session?.role === "fam") {
    return NextResponse.redirect(new URL("/families", req.url));
  }
  return NextResponse.next();
}
