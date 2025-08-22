"use client";
import { hr } from '@/src/assets/services'
import React from 'react'


export default function HrAndPayroll() {
  return (
    <section className='lg:main-container flex flex-col-reverse  lg:flex-row w-full py-14 gap-3'>
     <div className='w-full flex items-center text-gray-500 px-3 lg:px-0'>We are the fastest growing HR and Payroll Management Service provider in India, committed towards creating an excellence in the HR & Payroll Management Service space. UFS is serving 3500 plus Manpower. we provide complete HR and Payroll solutions well suited for big to small enterprises, constantly aiming at leveraging the HR landscape by offering unique and smart HR and Payroll solution to clients.</div>
     <div className='w-full center' >
        <img src={hr.src} alt="" />
     </div>
    </section>
  )
}
