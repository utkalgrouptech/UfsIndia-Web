import { ufs_delhi } from "@/src/assets/company/ufsDelhi";
import React from "react";

function Breadcrumb() {
  return (
    <div>
      <div
        className="w-full lg:h-screen bg-no-repeat bg-cover bg-center center_column gap-8 py-3"
        style={{ backgroundImage: `url(${ufs_delhi.src})` }}
      >
        <h1 className="lg:text-5xl  text-2xl text-white font-bold text-center">
          Best Facility <br />
          Management <br />
          Company In Delhi
        </h1>
        <p className="text-white lg:text-2xl text-center">
          Security Management | Housekeeping |<br /> Maintenance of Mechanical,
          Electrical, Plumbing |<br /> Payroll Management
        </p>
        <div className="w-[38%] center gap-7  ">
          <button className=" rounded-sm p-3 text-sm text-white border border-white border-b !transition-all !duration-500 !ease-in-out hover:bg-green-600 hover:border-none">
            OUR SERVICES
          </button>
          <button className="rounded-sm    p-3  text-sm bg-blue-900 text-white  !transition-all !duration-300 !ease-in-out hover:bg-green-600 hover:text-white">
            REQUEST SERVICE
          </button>
        </div>
      </div>

      <div className=" my-6">
        <h1 className="text-3xl text-green-600 text-center p-5 ">
          UFS, Best Facility Management & Company In New Delhi
        </h1>
        <p className="text-center lg:main-container px-2 ">
          Utkal Facilities Services Private Limited is a complete manpower
          solution company which provided all types of facility management &
          maintenance services to different industries, & corporate sectors.
          Currently, we have around 7000+ trained & skilled manpower on our
          roll. We are one of the pioneers in the Man Power Solution industry.
          Our 10 years of experience as India’s leading service provider has led
          to a client list that includes MNCs, Banks, Retail, Hospitality, Port,
          IT/BPO, Govt. /PSUs, Transport, and Industry.
        </p>
      </div>
    </div>
  );
}

export default Breadcrumb;
