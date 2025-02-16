import { getToken } from "next-auth/jwt"; // this function is for getting the token (cookie)
import { NextRequest, NextResponse } from "next/server"; // this is to handle the response

export async function middleware(req: NextRequest) {
  console.log("Middleware is running");

  // Get the token from the cookies using getToken from next-auth
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  // List of protected routes
  const protectedRoutes = ["/profile", "/dashboard", "/book", "/"];

  // Check if the request is for a protected route
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    // const email = token.email;
    // console.log(email);

    // // // Check if the email is valid and ends with '@up.edu.ph'
    // if (!email || !email.endsWith("@up.edu.ph")) {
    //   const loginUrl = new URL("/auth/login", req.url);
    //   if (req.nextUrl.pathname !== "/auth/login") {
    //     return NextResponse.redirect(loginUrl);
    //   }
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile", "/book", "/"],
};
