import { skill } from '@/src/assets/services'
import React from 'react'

export default function Home() {
  return (
    <section className='lg:main-container py-14  w-full flex flex-col lg:flex-row px-3 lg:px-0'>
      <div className='flex flex-col gap-5 w-full'>
        <p className='text-gray-400'>
        Ufs is leading of skilled manpower provider with presence across India. Through our offerings for skilled manpower services to our customers, we have emerged as a preferred staffing service partner for several leading e-commerce, logistic companies, production plants and multinational companies that have large distribution network pan India.
        </p>
        <p className='text-gray-400'>
        We provide temporary, permanent staffing solution and work with our clients for hiring / identification of temporary resources with a robust process in place. We source high-quality temporary / permanent staff across various domains on a pan India level.        </p>
      </div>
      <div className='w-full center lg:py-0 py-6'>
        <img src={skill.src} alt="" className='w-[70%]' />
      </div>
    </section>
  )
}
