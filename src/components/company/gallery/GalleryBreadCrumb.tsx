import { ufs_banner } from '@/src/assets/company/gallery'
import { PhotoGalleryArr } from '@/src/utils/home/Index'
import React from 'react'


export default function GalleryBreadCrumb() {
  return (
    <section>
    <div
    className="w-full h-[50%]  lg:main-container lg:py-28  py-8 text-center bg-cover bg-center  "
    style={{ backgroundImage: `url(${ufs_banner.src})` }}
  >
    <h1 className="font-bold lg:text-5xl text-3xl text-white  ">
    UFS IMAGE GALLERY
    </h1>
    <p className="text-gray-300 py-5 lg:text-2xl text-xl">
    Trusted Facility Management Services Provider In All <br /> Over India !
    </p>
  </div>


<div className='w-full h-48 center_column text-center lg:text-start'>
<h2 className='text-2xl font-bold text-gray-600'>Welcome to our photo gallery!</h2>
<p className='text-2xl text-gray-500'>Our highly trained and skilled staffs offer a full range of facility management services across the country.</p>
</div>

<div className="w-full lg:main-container bg-gray-100">
      <h1 className="text-center py-6 text-3xl text-gray-700 ">
      Photo gallery
      </h1>
      <div className="grid grid-cols-3 w-full">
        {PhotoGalleryArr.map((items) => (
          <div className="w-full lg:h-72 overflow-hidden" key={items.id}>
            <img
              src={items.img.src}
              alt=""
              className=" !transition-all lg:w-full lg:h-full !duration-500 !ease-in-out hover:!scale-110 object-cover "
            />
         </div>
        ))}
      </div>
    </div>

    </section>
  )
}
