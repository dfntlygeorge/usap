import { auth } from "@/app/auth";
import { prisma } from "@/lib/prisma";

export async function getUserId() {
  const session = await auth();

  if (!session?.user?.email) return null; // Ensure session and email exist

  // Fetch user ID from the database using email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true }, // Only fetch the id
  });

  return user?.id ?? null; // Return user ID or null if not found
}
