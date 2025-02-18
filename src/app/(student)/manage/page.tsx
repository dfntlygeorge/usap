import DashboardTable from "@/components/DashboardTable";
import { consultations } from "@/data";

const Page = async () => {
  return (
    <section className="px-6 py-2 md:px-12 md:py-3">
      <div className="mb-6 flex flex-col gap-3">
        <p className="text-md font-semibold md:text-xl">
          Approve or decline requests, add location or links, and click for more
          details about each consultation.
        </p>
      </div>
      <DashboardTable consultations={consultations} />
    </section>
  );
};

export default Page;
