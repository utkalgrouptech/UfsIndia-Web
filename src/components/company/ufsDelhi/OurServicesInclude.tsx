import { OurServicesIncludeArr } from "@/src/utils/home/Index";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Link from "next/link";

export default function OurServicesInclude() {
  return (
    <section className="w-full h-fit flex flex-col lg:main-container py-5 px-3 bg-gray-100">
      <div className="flex lg:flex-row flex-col">
        <div className="w-full">
          <h1 className="text-xl font-bold text-gray-700 p-3">Our services:</h1>
          {OurServicesIncludeArr.filter(
            (item) => item.id >= 1 && item.id <= 6
          ).map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <DoneIcon className="text-green-700 font-bold" />
              <p className="p-1 text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <h1 className="text-xl font-bold text-gray-700 p-3">
            INTEGRATED Property Management:
          </h1>
          {OurServicesIncludeArr.filter(
            (item) => item.id >= 7 && item.id <= 12
          ).map((item, index) => (
            <div key={index} className="flex items-center  gap-2">
              <DoneIcon className="text-green-700 font-bold" />
              <p className="p-1 text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="w-full ">
          <div className="bg-blue-900 h-60 w-full flex justify-center items-center flex-col">
            <p className=" text-white font-bold text-md text-center">
            CALL US NOW
            </p>
            <p className="text-2xl text-yellow-300 pb-3">
               <Link href={'tel:++91-9776666555'}>+91 9776666555</Link>
            </p>
            <p className=" text-white  text-2xl text-center">
            Facility Management <br /> Company in Delhi That  <br /> You Can Truly Trust
             
            </p>
          </div>
        </div>

      </div>

      <p className="text-gray-500 text-xl text-center mt-12">
      For further information about our services, feel free to get in touch with us over a phone call at <Link href={'tel:+919776666555'} className="text-green-600"> 9776666555  </Link> 
      </p>
    </section>
  );
}
