import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const professorEmails = ["g.a.donayre.school@gmail.com"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          role: profile.role ? profile.role : "STUDENT",
          image: profile.picture,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("User:", user);
      console.log("Account:", account);
      console.log("Profile:", profile);
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        if (user.role === "STUDENT") {
          const isProfessor = professorEmails?.includes(user.email as string);

          if (isProfessor) {
            await prisma.user.update({
              where: { id: user.id },
              data: { role: "PROFESSOR" },
            });

            if (user.id && user.name) {
              await prisma.professor.create({
                data: {
                  name: user.name,
                  userId: user.id,
                },
              });
            }

            token.role = "PROFESSOR";
          } else {
            token.role = "STUDENT";
          }
        } else {
          token.role = user.role;
        }
      }

      // if (user) {
      //   token.role = user.role || "STUDENT"; // Assign role to token
      // }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role || "STUDENT"; // Assign role to session
      return session;
    },
  },
});
