import React from "react";

const Missions = () => {
  return (
    <div className="w-full h-80  lg:center lg:main-container flex flex-col lg:flex-row lg:gap-7 gap-4">
      <div className="center_column bg-blue-950 lg:w-[33rem] h-[16rem] p-8">
        <h1 className="text-white font-bold text-xl">Mission</h1>
        <p className="text-white ">
          At UFS Facility Management Service, we are committed to provide the
          highest quality of facility services by exceeding the expectations of
          our clients. It is our wish to create and maintain prosperous and
          enjoyable environments where performance can thrive. We value on the
          human aspect of our brand and we base our success on ability to see
          our clients, not just as numbers - but as people.
        </p>
      </div>

      <div className="center_column bg-blue-950 lg:w-[33rem] h-[16rem] p-8">
        <h1 className="text-white font-bold text-xl">Vision</h1>
        <p className="text-white ">
          We believe everyone has the right to live and work in a clean, safe,
          healthy, enjoyable environment. We believe on the saying that
          “Cleanliness is next to Godliness”.
        </p>
      </div>
    </div>
  );
};

export default Missions;
