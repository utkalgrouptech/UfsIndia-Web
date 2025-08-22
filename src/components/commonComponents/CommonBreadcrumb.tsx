
import React from 'react'
type prop={
    data:{
        img:{
            src:string
        }
        cont1:string
        cont2:string
        cont3:string
        cont4:string
    }
}
export default function CommonBreadcrumb({data}:prop) {
  return (
    <div
    className="w-full  px-4 lg:main-container lg:py-20 py-10 bg-center bg-cover "
    style={{ backgroundImage: `url(${data.img.src})` }}
  >
    <h1 className="font-bold text-3xl lg:text-5xl  text-white  ">
      {data.cont1} <br /> {data.cont2}
    </h1>
    <p className="text-gray-300 py-5">
      {data.cont3} <br /> {data.cont4}
    </p>
  </div>
  )
}
