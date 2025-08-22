import { delhi } from '@/src/assets/company/ufsDelhi'
import Link from 'next/link'
import React from 'react'


export default function WhatMakesUFS() {
  return (
    <section className='lg:main-container flex flex-col lg:flex-row w-full py-12 px-3'>
      <div className='w-full gap-10  ' >
        <h1 className='text-3xl text-gray-800 py-4'>What Makes UFS <span className='font-bold'> Facility <br /> Management Services </span>  Contrasting <br />From Other Companies</h1>
        <p className=' text-gray-400 '>Our Facility Management in Delhi is thoroughly flexible, which gives us the ability to serve properties of all sizes. No matter what you need, whether you need to manage residential property in Delhi, or wish to maintain a big commercial building in New Delhi, we are ready to serve you with the best quality customized service. Over the years, we have received an excellent team of highly skilled professionals who have undergone comprehensive training to deliver the most exceptional services to our clients.</p>
     <p className= 'text-gray-500 py-4'>Our Expert team are always available <b className='font-bold'> for you site survey </b>  <Link href={'tel:+919853094446'}>and you can reach us at 9853094446/ </Link> <Link href={'tel:+919853094447'}>9853094447.</Link></p>
      </div>
      <div className='w-full center'>
        <img src={delhi.src} alt="" />
      </div>
    </section>
  )
}
