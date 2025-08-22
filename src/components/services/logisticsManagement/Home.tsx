import { logistic } from '@/src/assets/services'
import React from 'react'

export default function Home() {
  return (
    <section className='flex w-full flex-col lg:flex-row lg:main-container px-3 '>
      <div className='flex flex-col '>
        <h1 className='text-3xl text-gray-700 py-6' >Logistics and Warehouse Management Service</h1>
        <img src={logistic.src} alt="" className='w-[80%] ml-8 lg:ml-0' />

        <div className='w-full text-gray-600 flex flex-col py-6 gap-7'>
          <div className='text-2xl'>Line-haul service:</div>
          <div>We provide this service Pan-India, with an excellent workforce and strong operational team to support this. We provide transportation of goods across different states in a safe and efficient manner.</div>
          <div className='text-2xl'>Last mile delivery:</div>
          <div>We ensure that the main objectives of last mile delivery include minimizing cost, ensuring transparency and increasing efficiency is met successfully. This being a key element of the customer experience, we pride ourselves on the recruitment of highly driven and competent staff.</div>
        </div>


      </div >

      <div className="w-full center_column  gap-5 py-5">
        <div className="bg-white border border-gray-200 rounded-md w-96">
          <p className="bg-yellow-50 text-lg font-bold text-gray-700 p-4 border-b border-gray-200">
            OUR MAJOR SERVICES
          </p>
          <div className="divide-y divide-gray-200 ">
            <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out duration-300">Technical Services</p>
            <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out  duration-300">Soft Services</p>
            <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out  duration-300">Security Services</p>
            <p className="p-4 text-gray-600 hover:text-green-500 transition-all ease-in-out  duration-300">House Keeping Services</p>
          </div>
        </div>


        <div className="w-full ">
          <form
            className="w-96 h-full mx-auto shadow-md rounded p-10 flex flex-col justify-center items-start gap-4 !bg-white bg-cover bg-center bg-no-repeat"

          >
            <h1 className="text-2xl font-bold text-black">
              Schedule Your Service
            </h1>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required
            />


            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="Email"
              placeholder="Email"
              required
            />

            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              placeholder="Number"
              required
            />

            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              type="service"
              placeholder="Service"
              required
            />
            <input
              type="text"
              className="border border-gray-300 rounded-md py-8 px-14 focus:outline-none focus:border-blue-500"
              placeholder="Enter your text"
              required
            />
            <div className="flex items-center justify-between ">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>






    </section>
  )
}
