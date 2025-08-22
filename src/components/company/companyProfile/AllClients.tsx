import { allClientsArr } from "@/src/utils/home/Index";
import React from "react";

const AllClients = () => {
  return (
    <section className="main-container  py-5">
      <div className=" lg:text-2xl text-xl text-center text-gray-600 py-5 "> CLIENTS WE SERVE</div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6 px-6 lg:px-0">
        {allClientsArr.map((items) => (
          <img src={items.img.src} alt="" className="w-44" key={items.id}/>
        ))}
      </div>
    </section>
  );
};

export default AllClients;



