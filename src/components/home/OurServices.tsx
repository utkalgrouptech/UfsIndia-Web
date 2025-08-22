import { OurServicesArr } from '@/src/utils/home/Index';
import DoneIcon from '@mui/icons-material/Done';
import Link from 'next/link';

import React from 'react';

const OurServices = () => {
  return (
    <section className='w-full h-fit flex flex-col lg:main-container py-5 px-3 bg-gray-100'>
        <div className='flex lg:flex-row flex-col'>

      <div className="w-full">
        <h1 className='text-xl font-bold text-gray-700 p-3'>Our services:</h1>
        {OurServicesArr.filter(item => item.id >= 1 && item.id <= 6).map((item) => (
          <div key={item.id } className="flex items-center gap-2">
            <DoneIcon className='text-green-700 font-bold'/>
            <p className='p-1 text-gray-600'>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="w-full">
      <h1 className='text-xl font-bold text-gray-700 p-3' >INTEGRATED Property Management:</h1>
        {OurServicesArr.filter(item => item.id >= 7 && item.id <= 12).map((item, index) => (
          <div key={index} className="flex items-center  gap-2">
            <DoneIcon className='text-green-700 font-bold' />
            <p className='p-1 text-gray-600'>{item.title}</p>
          </div>
        ))}     
      </div>

      <div className="w-full mt-4 lg:mt-0">
        <div className='bg-blue-900 h-60 w-full flex justify-center items-center flex-col'>
            <p className=' text-white font-bold text-md text-center'>REDEFINING CUSTOMER</p>
            <p className=' text-white font-bold text-2xl text-center'>EXPERIENCE IN FM <br />INDUSTRY</p>
<p className='text-2xl text-white'>Call Us at <Link href={'tel:+919776666555'} className='text-yellow-300'>9776666555</Link></p>
        </div>
         </div>

        </div>

        <p className='text-gray-500 text-xl lg:text-center p-2 mt-12'>For any inquiries, questions, complaints, commendations, please call:<Link href={'tel:+919776666555'} className='text-green-600 '>9776666555</Link> contact us to get more information.</p>
    </section>
  );
}

export default OurServices;
