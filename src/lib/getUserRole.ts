import { auth } from "@/app/auth";

export async function getUserRole() {
  const session = await auth();
  return session?.user?.role || "STUDENT"; // Default to "STUDENT" if not found
}
