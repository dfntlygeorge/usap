import DashboardTable from "@/components/DashboardTable";
import React from "react";
import { consultations } from "@/data";

const page = () => {
  const name = "George";

  return (
    <section className="px-6 py-2 md:px-12 md:py-3">
      <div className="mb-6 flex flex-col gap-3">
        <p className="text-3xl font-bold md:text-5xl">Hello, {name}🫡</p>
        <p className="text-lg font-semibold md:text-xl">
          Here&apos;s an overview of your consultations.
        </p>
      </div>
      <DashboardTable consultations={consultations} />
    </section>
  );
};

export default page;
