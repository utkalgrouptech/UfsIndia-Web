import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Collapse } from "@mui/material";
import { Fragment, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { faqCareerArr } from "@/src/utils/home/Index";
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from "next/link";

export default function FAQ() {
  const [activeIndex, setactiveIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<any>(null);
  const handleClick = (i: any) => {
    if (isOpen === i) {
      setIsOpen(false);
      return;
    }
    setIsOpen(i);
  };
  return (
    <>
      <section className="flex flex-col gap-10 lg:py-10 py-5 ">
        <div className="w-full flex flex-col items-start justify-center gap-4 lg:px-10 ">
          <Fragment>
            {faqCareerArr.map((innerVal, innerIndex: number) => (
              <span
                className="flex flex-col items-center justify-between w-full gap-4 p-2 "
                key={innerVal.id}
                onClick={() => {
                  handleClick(innerIndex);
                  setactiveIndex(innerIndex);
                }}
              >
                <span className="flex items-center justify-between w-full group">
                  <h1 className="text-base text-gray-600 capitalize group-hover:opacity-50  !transition-all !duration-300 !ease-in-out">
                    {innerVal.title}
                  </h1>
                  <ArrowDropDownIcon className="text-bgColour group-hover:text-gray-500" />
                </span>
                <Collapse
                  className="items-start self-start "
                  in={isOpen === innerIndex}
                  timeout="auto"
                  unmountOnExit
                >
                  {faqCareerArr[activeIndex].content.map((item) => (
                    <span className="!w-full flex gap-2" key={item.id}>
                      <ArrowRightAltIcon className="!text-bgColour text-3xl" />
                      <p className="w-full text-sm  text-gray-400 text-start">
                        {item.point}
                      </p>
                    </span>
                  ))}
                </Collapse>
              </span>
            ))}
          </Fragment>
        </div>
        <p className="text-md    text-gray-500 ">
          Do Not Be Dismayed If you do not find relevant job openings. At UFS We
          always want to hire creative People to our team So, You can send your
          updated CV to <span className=" text-green-600 cursor-pointer hover:text-blue-700">
    
            <DraftsIcon className="text-lg  hover:text-blue-700"/>
                <Link href={'mailto:+talent@ufsindia.in'}>talent@ufsindia.in</Link>
            </span>  and our recruitment team will get
          back to you as per your corresponding job opening.
        </p>
      </section>
    </>
  ); 
}
