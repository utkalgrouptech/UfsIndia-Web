import React from "react";
import {  footerArr } from "../utils/home/Index";
import {  main_logo } from "../assets/home";
import { useRouter } from "next/router";

const Footer = () => {
  const router= useRouter()
  return (
    <footer
      className="lg:main-container flex flex-col items-center  lg:center_column bg-[#F3F4F6] w-full gap-6 h-full lg:h-56 p-14"
      
    >
      <img src={main_logo.src} className="lg:h-28 w-36 " alt="" />
      <div className="lg:center grid grid-cols-3 gap-3 ">
        {footerArr.map((items) => (
          <span className="center gap-2" key={items.id}>
            <p className="text-gray-500 cursor-pointer"  onClick={()=>{
          router.push(`${items.path}`)
        }}>{items.title}</p>
            <span className="bg-black w-1 h-1 rounded-full"></span>
          </span>
        ))}
      </div>
  <div className="w-full flex flex-col items-center gap-2">
<p className="text-gray-500">Copyright © 2011-2021 Utkal Facility Services Pvt. Ltd. All Rights Reserved . Sitemap . Developed by Indoplus</p>
      
  </div>
    </footer>
  );
};

export default Footer;
