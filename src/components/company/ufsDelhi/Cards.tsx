import React from 'react'
import { featuredArr } from '@/src/utils/home/Index' 
function Cards() {
  return (
        <section className="flex flex-col items-center justify-center gap-2  lg:py-14">

      <div className="flex lg:flex-row flex-col lg:gap-1 gap-4">
        {featuredArr.filter(item => item.id >= 1 && item.id <= 3).map((item, index) => (
          <div className="w-96 h-60 bg-white flex items-end relative overflow-hidden " key={item.id}>
            <img src={item.img.src} alt=""  className="  !transition-all  !duration-500 hover:scale-105" />
            <div className="w-full h-16 bg-orange-400 opacity-90 text-center pt-5 z-10 absolute  ">
              <p className="text-white font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards
