import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Collapse } from "@mui/material";
import { Fragment, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { faqArr } from "@/src/utils/home/Index";
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
      <section className="flex flex-col items-start justify-center gap-10 py-12 lg:main-container">
        <div className="px-12">
          <h1 className="text-3xl font-bold text-gray-700 capitalize">
            Frequently Asked Questions
          </h1>
          <p className="text-md mt-3 text-gray-500">
            Here are answers to some questions which our clients frequently have
            in their mind.
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-4 px-10 ">
          <Fragment>
            {faqArr.map((innerVal, innerIndex: number) => (
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
                  {faqArr[activeIndex]?.content?.map((item) => (
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
        <p className="text-md px-12 text-gray-500">
          Here are answers to some questions which our clients frequently have
          in their mind.
        </p>
      </section>
    </>
  );
}
