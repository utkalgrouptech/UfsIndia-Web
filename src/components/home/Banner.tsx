import { BannerImg } from '@/src/assets/home'
import Link from 'next/link'
import React from 'react'


const Banner = () => {
  return (
    <section className='center_column w-full h-80 relative top-0 text-center'  style={{ backgroundImage: `url(${BannerImg.src})` }}>
     <div className='bg-orange-600 bg-opacity-80 w-full h-full center_column gap-7  absolute top-0 left-0 right-0 bottom-0'>
      <div className='text-xl text-white'>It all starts with a conversation. Tell us what you need.</div>
      <div className='font-bold text-3xl text-white'>Best Property Management Company In India</div>
      <button  className='py-3 px-6 rounded-sm bg-gray-100 text-blue-950 font-semibold hover:bg-green-700 hover:text-white !transition-all !duration-500 !ease-in-out ' ><Link href={'tel:+919776666555'}>9776666555</Link></button>
     </div>
     <div>
      
     </div>
    </section>
  )
}

export default Banner
