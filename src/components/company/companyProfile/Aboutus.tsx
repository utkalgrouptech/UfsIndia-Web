import { about_ufs } from '@/src/assets/company/about'
import React from 'react'

const Aboutus = () => {
  return (
    <div className="flex lg:flex-row flex-col px-2 w-full h-fit lg:main-container py-5">
    <div className="w-full">
      <h2 className="text-md text-gray-500 ">
        <span className="text-bold text-md text-gray-700">
          Utkal Facilities Services Private Limited
        </span>{" "}
        , part of the Utkal Group of Companies offers Integrated Facility &
        Maintenance Services to various Industries like, Railways,
        Airports, Logistic, Commercials, Residential Installations etc.{" "}
        <br /> <br />
        Our multifaceted Facility Management System (FMS) plays an
        important role in the daily operations and management processes of
        every business. The expertise of our certified facilities
        management division plays a pivotal role in the meticulous
        planning and delivery of every project. <br /> <br /> We are an
        integrated FMS company where our prime focus is to provide
        proficient maintenance services to our clients by maximizing
        opportunities of their facilities portfolio and achieving their
        corporate goals. This is attained through operational
        efficiencies, cost optimization and risk mitigation, thereby
        creating memorable experiences for our clients
      </h2>
    </div>
    <div className="w-full center">
      <img
        src={about_ufs.src}
        alt=""
        className="object-cover w-[500px]"
      />
    </div>
  </div>
  )
}

export default Aboutus
