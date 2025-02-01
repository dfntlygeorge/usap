import { auth, signOut } from "@/app/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/auth/login");
  }
  return (
    <>
      <h1>Hello world!</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Sign Out</Button>
      </form>
    </>
  );
}
