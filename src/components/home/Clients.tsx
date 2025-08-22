import { clientsArr } from "@/src/utils/home/Index";
import React from "react";

const Clients = () => {
  return (
    <section className="center_column lg:main-container py-5">
      <div className="text-2xl text-gray-600 py-5"> CLIENTS WE SERVE</div>
      <div className="flex flex-row">
        {clientsArr.map((items) => (
          <img src={items.img.src} alt="" className="lg:w-44 w-14" key={items.id} />
        ))}
      </div>
    </section>
  );
};

export default Clients;


