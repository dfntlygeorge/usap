import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "@/app/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const StudentNavBar = () => {
  return (
    <header className="mb-10 bg-upMaroon px-6 py-2 text-2xl font-bold text-background dark:text-foreground md:px-12 md:py-3">
      <nav className="flex justify-between">
        <div>
          <Link
            href={"/dashboard"}
            className="flex items-center justify-center gap-3"
          >
            <Image
              src={"/usap-logo.png"}
              alt="usap logo"
              width={60}
              height={60}
            />
            <span className="uppercase">Usap</span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href={"/book"}>
            <span className="hidden uppercase sm:block">Book</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={"/user-icon.svg"}
                width={35}
                height={35}
                alt="user logo"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href={"/dashboard"}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Link href={"/book"}>Book</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button>Sign Out</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default StudentNavBar;
