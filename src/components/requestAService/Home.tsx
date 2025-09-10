import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="w-full flex flex-col lg:flex-row lg:main-container py-4">
      <div className="w-full">
        <form className="w-full h-full flex flex-col gap-4 !bg-white bg-cover bg-center bg-no-repeat px-3 lg:px-0">
          <h1 className="text-2xl font-bold ">Schedule Your Service</h1>
          <div className="flex flex-col lg:flex-row gap-3 w-full">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required
            />

            <input
              className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="Email"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex gap-4 flex-col lg:flex-row">
            <input
              className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="Number"
              required
            />
            <input
              className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="text"
              placeholder="Service you are looking for"
              required
            />
          </div>

          <input
            type="text"
            className="border border-gray-300  w-full rounded-md py-8 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your text"
            required
          />
          <span className="w-full flex items-center justify-start gap-4">
            <input type="checkbox" name="" id="" />
            <p>i am not robort</p>
          </span>
          <div className="flex items-center justify-between ">
            <button className="bg-green-500 !transform-all !duration-500 !ease-in-out hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-full lg:center my-4 lg:my-0  lg:px-0 px-3">
        <div className=" border-8 border-gray-300 p-7  lg:w-[60%] flex flex-col gap-3">
          <h1 className="text-xl ">Contact Information</h1>
          <p className="font-bold text-md text-gray-600">
            Utkal Facility Services Pvt. Ltd
          </p>

          <div className="text-md">
            <p className="font-bold text-md text-gray-600">Contact Number</p>
            <Link href={'tel:+919776666555'} className='text-black'>+91 8260500785</Link>
  
          </div>

          <div className="text-md">
            <p className="font-bold text-md text-gray-600">Email</p>
            <Link href={'mailto:info@utkalfacility.com'}>info@utkalfacility.com</Link>
           
          </div>
        </div>
      </div>
    </section>
  );
}
