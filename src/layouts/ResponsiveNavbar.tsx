import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Collapse } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import { navArr } from "../utils/home/Index";

export default function ResponsiveNaveBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null); 
  const router = useRouter();

  const handleSubMenuClick = (id: any) => {
    if (openSubMenu === id) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(id);
    }
  };

  return (
    <section className="w-full bg-[#16A34A] lg:hidden sticky top-0 z-50 block">
      <section className="w-full px-3 h-16 flex items-center justify-between">
        <div>
          {!isOpen ? (
            <MenuIcon
              onClick={() => {
                setIsOpen(true);
              }}
              className="!text-white"
            />
          ) : (
            <ClearIcon
              className="!text-white"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          )}
        </div>

        <div
          className="bg-blue-900 py-3 px-4 text-sm text-white capitalize cursor-pointer transition-all duration-500 ease-out hover:bg-yellow-400"
          onClick={() => {
            router.push(`/requestAService`);
          }}
        >
          Request Service
        </div>
      </section>

      <section className="z-[999]">
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <div className="w-full h-full bg-white">
            {navArr.map((item) => (
              <div key={item.id}>
                <div
                  className="w-full p-4 border border-gray-200 flex items-center justify-between text-gray-500 cursor-pointer"
                  onClick={() => {
                    if (item.subMenu) {
                      handleSubMenuClick(item.id); // Toggle submenu if it exists
                    } else {
                      router.push(`${item.path}`); // Navigate directly if no submenu
                    }
                  }}
                >
                  <h1 className="text-md font-bold capitalize  ">{item.title}</h1>
                  {item.subMenu && (
                    <ArrowForwardIosIcon
                      className={`transition-transform duration-300 ${
                        openSubMenu === item.id ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </div>

                {item.subMenu && (
                  <Collapse in={openSubMenu === item.id} timeout="auto" unmountOnExit>
                    <div className="">
                      {item.subMenu.map((subItem) => (
                        <div
                          key={subItem.id}
                          className="w-full p-3 border-l border-gray-200 flex items-center justify-between text-gray-500 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            router.push(`${subItem.path}`);
                          }}
                        >
                          <p className="text-md">{subItem.title}</p>
                        </div>
                      ))}
                    </div>
                  </Collapse>
                )}
              </div>
            ))}
          </div>
        </Collapse>
      </section>
    </section>
  );
}
