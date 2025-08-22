import React from 'react';

const CommonForm = () => {
  return (
    <div className="w-full center_column gap-5 py-5">
      <div className="bg-white border border-gray-200 rounded-md w-96"> 
        <p className="bg-yellow-50 text-lg font-bold text-gray-700 p-4 border-b border-gray-200">
          OUR MAJOR SERVICES
        </p>
        <div className="divide-y divide-gray-200 ">
          <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out duration-300">Technical Services</p>
          <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out duration-300">Soft Services</p>
          <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out duration-300">Security Services</p>
          <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out duration-300">House Keeping Services</p>
        </div>
      </div>

      <div className="w-full ">
        <form className="w-96 h-full mx-auto shadow-md rounded p-10 flex flex-col justify-center items-start gap-4 !bg-white bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl font-bold text-black">Schedule Your Service</h1>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="email" placeholder="Email" />
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="Number" />
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="email" placeholder="Service" />
          <input type="text" className="border border-gray-300 rounded-md py-8 px-14 focus:outline-none focus:border-blue-500" placeholder="Enter your text" />
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommonForm;
