"use client";
import React from "react";

export default function ApplyForm() {
  return (
    <section className="lg:main-container w-full py-7 px-3 ">
      <h1
        className="text-3xl text-gray-700 py-5 text-center lg:text-start
      "
      >
        Application Form
      </h1>

      <div className="w-full flex gap-6 ">
        <div className=" w-full ">
          
            <form className="w-full h-full flex flex-col gap-4 !bg-white bg-cover bg-center bg-no-repeat">
              <div className="flex lg:flex-row flex-col gap-3 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="First Name"
                  required
                />

                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="Text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="flex lg:flex-row flex-col gap-3 w-full">
                <input
                  className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Phone"
                  required
                />

                <input
                  className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="Email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="flex flex-col gap-4">
                <input
                  className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="date"
                  placeholder="Enter Your Email"
                  required
                />
                <input
                  className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="Email"
                  placeholder="Address"
                  required
                />
              </div>

              <div className="w-full lg:grid lg:grid-cols-2 flex  flex-col lg:gap-0 gap-3">
                <div className="lg:pr-6">

                <select
                  id="Select"
                  className="mt-1 block w-full px-3  py-2 border text-gray-400 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                >
                  <option value="one">Select</option>
                  <option value="one">Option One</option>
                  <option value="two">Option Two</option>
                
                </select>
                </div>

                <div>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="file"
                  placeholder="Address"
                  
                />
                </div>
              </div>

              <span className="w-full flex items-center justify-start gap-4 ">
                <input type="checkbox" name="" id="" />
                <p>i am not robot</p>
              </span>
              <div className="flex items-center justify-between ">
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </section>
  );
}
