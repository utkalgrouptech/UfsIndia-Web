import React from "react";
import { BannerImg } from "@/src/assets/home";
import DoneIcon from "@mui/icons-material/Done";
import { BannerArr } from "@/src/utils/home/Index";
BannerArr;

const BannerGray = () => {
  return (
    <section
      className="center_column w-full h-full lg:h-96 relative top-0 bg-no-repeat bg-cover bg-center lg:py-10 "
      style={{ backgroundImage: `url(${BannerImg.src}) ` }}
    >
      <div className="bg-black bg-opacity-80 w-full h-full lg:h-full lg:center_column gap-7 z-20 lg:absolute top-0 left-0 right-0 bottom-0 py-12 lg:px-0 px-10">
        <div className="font-bold lg:text-3xl text-2xl text-white text-center">
          Our Customized Software- UFS 360
        </div>
        <div className="text-md text-white lg:w-2/4 text-center w-full">
          We have developed our own customized software to maintain the complete
          tranperency between the 3 major stack holders i:e employee, client and
          company
        </div>

        <div className="z-50 flex lg:flex-row flex-col  ">
          <div className="w-full">
            {BannerArr.filter((item) => item.id >= 1 && item.id <= 3).map(
              (item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <DoneIcon className="text-white font-bold" />
                  <p className="p-1 text-white">{item.title}</p>
                </div>
              )
            )}
          </div>

          <div className="w-full">
            {BannerArr.filter((item) => item.id >= 4 && item.id <= 6).map(
              (item, index) => (
                <div key={index} className="flex items-center  gap-2">
                  <DoneIcon className="text-white font-bold" />
                  <p className="p-1 text-white">{item.title}</p>
                </div>
              )
            )}
          </div>
          <div className="w-full">
            {BannerArr.filter((item) => item.id >= 7 && item.id <= 9).map(
              (item, index) => (
                <div key={index} className="flex items-center  gap-2">
                  <DoneIcon className="text-white font-bold" />
                  <p className="p-1 text-white">{item.title}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerGray;
