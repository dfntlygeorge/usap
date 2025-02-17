import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { getUserRole } from "./lib/getUserRole";

export async function middleware(req: NextRequest) {
  console.log("Middleware is running...");

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  const protectedRoutes = ["/profile", "/dashboard", "/book", "/", "/manage"];

  // Redirect the user if not authenticated.
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Check only if the user has token(meaning he's authenticated) if not just default to "STUDENT"
  const userRole = token ? await getUserRole() : "STUDENT";

  // Now, we enforce the role-based access on the /manage and /book path.
  const currentUrl = req.nextUrl.pathname;

  if (currentUrl === "/manage" && userRole !== "PROFESSOR") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (currentUrl === "/book" && userRole !== "STUDENT") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/book", "/", "/manage"],
};
