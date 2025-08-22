import Link from 'next/link'
import React from 'react'

export default function contactUsHome() {
  return (
    <section className="lg:main-container w-full py-7 px-3 ">
    <h1 className="text-3xl text-gray-700 py-2 text-center lg:text-start">Contact Information</h1>

<div className="w-full flex flex-col lg:flex-row gap-6 ">
    <div className=" w-full ">
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 w-full">
        <div>
          <h2 className="text-gray-600 font-bold">Head Office :</h2>
          <p className="py-2 text-gray-500">Jaydev Vihar Near Pal Heights Head Office: HIG-42, Jayadev Vihar, Bhubaneswar, Odisha.
          </p>
        </div>

        <div>
          <h2 className="text-gray-600 font-bold">Contact Number</h2>
          <p className="py-2 text-gray-500">
           <Link href={'tel:++91-9776666555'}>Mobile: +91 9776666555 </Link>
          </p>
        </div>

        <div>
          <h2 className="text-gray-600 font-bold">Email Id</h2>
          <p className="py-2 text-gray-500">
            <Link href={'mailto:info@utkalfacility.com'}>info@utkalfacility.com</Link>
          </p>
        </div>
<div className='flex flex-col'>

        <div>
          <h2 className="text-gray-600 font-bold ">Corporate Office :</h2>
          <p className="py-2 text-gray-500">
          214, Second Floor, Sector A, Pocket C, Vasant Kunj, New Delhi 110070
          </p>
        </div>
        <div>
          <h2 className="text-gray-600 font-bold ">Branch Office.</h2>
          <p className="py-2 text-gray-500">
          B-31 Rajdanga Nabapally ps-kasba kolkata 
          </p>
        </div>
     
      </div>

</div>

      <div className="w-full">
        <form className="w-full h-full flex flex-col gap-4 !bg-white bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl font-bold text-center lg:text-start">
            Schedule Your Service
          </h1>
          <div className="flex lg:flex-row flex-col gap-3 w-full">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          </div>

          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="number"
            placeholder="Number"
            required
          />

          <input
            type="text"
            className="border border-gray-300  w-full rounded-md py-8 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your text"
            required
          />
          <span className="w-full flex items-center justify-start gap-4">
          <input type="checkbox" name="" id="" />
          <p>i am not robot</p>
          </span>
          <div className="flex items-center justify-between "> 
            <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div> 
    <div className="lg:w-3/4 !h-[80vh] ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0330690686887!2d85.8212497!3d20.298898299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2e0a39ec9%3A0xe46791b69959a045!2sGIET%20Bhubaneswar%20Ghangapatana%20City%20Office!5e0!3m2!1sen!2sin!4v1736576196805!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  </section>
  )
}
