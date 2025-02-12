import { getToken } from "next-auth/jwt"; // this function is for getting the token (cookie)
import { NextRequest, NextResponse } from "next/server"; // this is to handle the response

export async function middleware(req: NextRequest) {
  console.log("Middleware is running");
  // we get the toker from the cookies using getToken from next
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  // list of protected routes
  const protectedRoutes = ["/profile", "/dashboard", "/book", "/"];

  // we check if the request is for a protected route.
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      const loginUrl = new URL("auth/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/book", "/"],
};
