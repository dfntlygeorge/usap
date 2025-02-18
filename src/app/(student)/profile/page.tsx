import Image from "next/image";
import React from "react";
import { auth } from "@/app/auth";
import ScheduleTable from "@/components/ScheduleTable";
import { getUserRole } from "@/lib/getUserRole";

const Page = async () => {
  const session = await auth();
  const user = session?.user;
  const studentMockData = {
    studentId: "202403214",
    degreeProgram: "Bs Computer Science",
    zodiacSign: "Pisces",
    saisId: "12345678",
  };
  const userRole = await getUserRole();
  return (
    <section className="px-6 py-1 uppercase md:px-24 md:py-2">
      <div className="mb-6 flex items-center gap-4">
        <Image
          className="rounded-full"
          src={user?.image || "/profile-user-icon.svg"}
          alt="user profile picture"
          height={180}
          width={180}
        />
        <p className="text-2xl font-bold md:text-4xl">{user?.name}</p>
      </div>
      <div className="px-2 sm:px-4">
        <h2 className="text-2x mb-3 font-bold uppercase">
          General Information
        </h2>
        <div className="flex w-full flex-col justify-between sm:flex-row lg:w-5/6">
          {/* TODO: bday to zodiac sign and the db for this shit. */}
          <div>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Name</span>: {user?.name}
              </li>
              <li>
                <span className="font-semibold">Email</span>: {user?.email}
              </li>
              <li>
                <span className="font-semibold">Studen Id</span>:{" "}
                {studentMockData.studentId}
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Degree Program</span>:{" "}
                {studentMockData.degreeProgram}
              </li>
              <li>
                <span className="font-semibold">Zodiac Sign</span>:{" "}
                {studentMockData.zodiacSign}
              </li>
              <li>
                <span className="font-semibold">Sais Id</span>:{" "}
                {studentMockData.saisId}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {userRole === "PROFESSOR" ? <ScheduleTable /> : null}
    </section>
  );
};

export default Page;
