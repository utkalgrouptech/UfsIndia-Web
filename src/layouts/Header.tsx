import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { navArr } from "../utils/home/Index";
import { main_logo } from "../assets/home";
import CallIcon from "@mui/icons-material/Call";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useRouter } from "next/router";
import Link from "next/link";



const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (

    <section className="..">
      <div className="h-24 w-full center_between px-2 lg:main-container z-40  ">
        <div className="w-full h-full cursor-pointer flex items-center center_between align-left">
          <Link href={"/"}>
            <img
              src={main_logo.src}
              alt="logo"
              className="h-7 object-cover object-center lg:h-20"
            />
          </Link>
        </div>

        <div className="flex items-center gap-10 justify-end w-full font-medium text-lg">
          <span className="flex gap-2">
            <CallIcon className="!text-green-500" />
            <Link href={'tel:+919776666555'} className='text-black'>9776666555</Link>
          </span>
          <span className=" gap-2 hidden md:flex">
            <DraftsIcon className="!text-green-500" />
            <Link href={'mailto:info@utkalfacility.com'}>info@utkalfacility.com</Link>
          </span>
          <p
            className="bg-blue-900 py-1 px-3 text-center rounded text-white capitalize cursor-pointer transition-all duration-500 ease-out hover:bg-yellow-400 hidden md:block"
            onClick={() => {
              router.push(`/requestAService`);
            }}
          >
            SCHEDULE SERVICE NOW
          </p>
        </div>
      </div>


      <div className="w-full h-14 bg-[#16A34A] text-white px-24 center gap-6 justify-start uppercase font-medium hidden lg:flex">
        {navArr.map((item) => (
          <span
            key={item.id}
            className={` h-full w-fit items-center p-2 group cursor-pointer relative hover:bg-blue-900 text-white z-60  hidden lg:flex ${currentPath === item.path ? 'bg-blue-900' : ''}`}
            onClick={() => {
              router.push(`${item.path}`);
            }}
          >
            <p>{item.title}</p>
            {item.subMenu && <ExpandMoreIcon />}
            {item.subMenu && (
              <div className="z-50 absolute top-full left-0 w-60 hidden group-hover:block  transition-all duration-500 ease-in-out">
                {item.subMenu.map((subItem) => (
                  <h2
                    className={`capitalize text-sm bg-white p-4 w-full ${currentPath === subItem.path ? 'text-blue-900' : 'text-gray-500'}`}
                    key={subItem.id}
                    onClick={() => {
                      router.push(`${subItem.path}`);
                    }}
                  >
                    {subItem.title}
                  </h2>
                ))}
              </div>
            )}
          </span>
        ))}
      </div>
    </section> 
  );
};

export default Header;
