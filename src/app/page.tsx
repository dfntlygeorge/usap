import { signOut } from "@/app/auth";
import { Button } from "@/components/ui/button";

export default async function SignIn() {
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
