import React from "react";

const Page = ({ params }: { params: { consultationId: string } }) => {
  return <div>Consultation ID : {params.consultationId}</div>;
};

export default Page;
