import { suresh_kumar_mishra } from '@/src/assets/company/about'
import { useRouter } from 'next/router'
import React from 'react'

const Poster = () => {
  const Router = useRouter()
  return (
    <div className='flex flex-col  gap-4 lg:mt-0 mt-40'>
         <div className="lg:main-container">
          <img src={suresh_kumar_mishra.src} alt="" />
        </div>

        <div className="w-full h-40 flex flex-col lg:flex-row justify-center items-center text-center bg-green-600 ">
          <div className="w-[62%] center">
            <p className="lg:text-2xl text-white">
              WORK WITH US <br />
             { `We’re `}looking for people to join the team who are as excited as we are
            </p>
          </div>
          
          <div className="w-[38%] center ">
            <button className="w-36 h-12 text-sm text-white border border-white border-b !transition-all !duration-300 !ease-in-out hover:bg-slate-50 hover:text-green-600" onClick={()=>{Router.push("/apply")}} >
              APPLY NOW
            </button>
          </div>
        </div>
    </div>
  )
}

export default Poster
