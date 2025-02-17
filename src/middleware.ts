import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Middleware is running...");

  // ✅ Get the token (JWT) from the request cookies
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET, // 🔥 Ensure this matches NextAuth config
  });

  console.log("Token in middleware:", token);

  // ✅ Define protected routes
  const protectedRoutes = ["/profile", "/dashboard", "/book", "/"];

  // ✅ Redirect if no token is found
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    console.log("No token found, redirecting to login...");
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/book", "/"],
};
