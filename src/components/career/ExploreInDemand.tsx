import React from 'react'
import { ExploreindemandArr } from "@/src/utils/home/Index";
import DoneIcon from "@mui/icons-material/Done";

export default function ExploreInDemand() {
  return (
    <section className='lg:main-container  bg-gray-100 py-9 '>
          <div className="flex lg:flex-row flex-col px-3 lg:px-0">
        <div className="w-full">
          <h1 className="text-xl font-bold text-gray-700 p-3">Our services:</h1>
          {ExploreindemandArr.filter(
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
          {ExploreindemandArr.filter(
            (item) => item.id >= 7 && item.id <= 12
          ).map((item, index) => (
            <div key={index} className="flex items-center  gap-2">
              <DoneIcon className="text-green-700 font-bold" />
              <p className="p-1 text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="lg:w-[80%] mt-3  lg:mt-0">
          <div className="bg-blue-900 h-60 w-full flex justify-center items-center flex-col">
            <p className=" text-white font-bold text-md text-center">
            DISCOUNT OFFER
            </p>
            <p className="text-2xl text-white pb-3">
            10% OFF SERVICE CALL.
            </p>
            <p className=" text-white  text-2xl text-center">
            $100 off new system <br />purchase. 
             
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
