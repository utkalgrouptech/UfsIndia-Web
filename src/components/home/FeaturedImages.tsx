import { GalleryArr } from "@/src/utils/home/Index";
import React from "react";

const GallerySec = () => {
 
  return (
    <div className="w-full  h-fit  lg:main-container bg-gray-100 ">
      <h1 className="text-center py-6 text-3xl text-gray-700 ">
        Featured Image
      </h1>
      <div className="grid grid-cols-3 w-full">
        {GalleryArr.map((items) => (
          <div className="w-full h-72 overflow-hidden" key={items.id}>
            <img
            
              src={items.img.src}
              alt=""
              className=" !transition-all w-full !duration-500 !ease-in-out hover:!scale-110 h-full object-cover "
            />
         </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySec;
