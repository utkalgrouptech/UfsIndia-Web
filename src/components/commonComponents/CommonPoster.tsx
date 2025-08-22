import React from 'react'

export default function CommonPoster({data}:any) {
  return (
    <div className="w-full lg:h-40 h-full flex flex-col lg:flex-row bg-green-600 py-10 mt-3 lg:py-0">
    <div className="lg:w-[62%] center text-center">
      <p className="text-xl lg:text-2xl text-white">
        {data.cont1} <br />
      {data.cont2}
      </p> 
    </div>
    <div className="lg:w-[38%] lg:center flex justify-center ">
      <button className="w-36 h-12 text-sm text-white border border-white border-b !transition-all !duration-300 !ease-in-out hover:bg-slate-50 hover:text-green-600">
       {data.cont3}
      </button>
    </div>
  </div>
  )
}
