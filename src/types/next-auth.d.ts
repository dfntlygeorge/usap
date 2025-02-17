import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: "STUDENT" | "PROFESSOR";
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: "STUDENT" | "PROFESSOR";
    };
  }

  interface JWT {
    id: string;
    role: "STUDENT" | "PROFESSOR";
  }
}
