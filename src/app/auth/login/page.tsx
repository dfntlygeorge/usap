import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn, auth } from "@/app/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen md:flex-row">
      {/* larger: this is just the overview of the app */}
      <div className="hidden flex-1 flex-col items-start justify-center gap-20 bg-upMaroon px-4 text-background dark:text-foreground sm:px-12 md:flex">
        <div className="flex items-center justify-between">
          <Image
            src={"/usap-logo.png"}
            alt="Usap logo"
            width={125}
            height={125}
          />
          <h1 className="text-md font-bold uppercase md:text-2xl">
            <span className="block">Your Consultation</span>
            <span className="block">Management System</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold sm:text-4xl">WHAT IS USAP?</h2>
          <p>
            USAP is your go-to platform for scheduling consultations with UPB
            professors. Manage your consultation bookings seamlessly, all in one
            place.
          </p>
        </div>
      </div>

      {/* smaller section: this is for the login*/}
      <div className="flex flex-1 items-center justify-center md:flex-[0.85]">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={"/upb-logo.png"}
            alt="up baguio logo"
            width={150}
            height={150}
          />

          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <Button className="pl-2">
              <Image
                src={"/google-logo.svg"}
                alt="google logo"
                width={30}
                height={30}
              />
              Sign In with UPmail
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
