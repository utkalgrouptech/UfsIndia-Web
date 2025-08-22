import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type ServiceBullet = {
  id: number;
  points: string;
};

type Props = {
  data: {
    title: string;
    desc1: string;
    desc2: string;
    ServiceBulletArr: ServiceBullet[];
  };
};

export default function CommonBulletDesc({ data }: Props) {
  // Filter out any bullet points with empty strings
  const validBullets = data.ServiceBulletArr.filter(
    (item) => item.points.trim() !== ""
  );

  return (
    <section className="lg:mx-24 my-5 w-full flex">
      <div className="w-full flex flex-col">
        <div className="w-full space-y-2">
          <h1 className="text-3xl">{data.title}</h1>
          <p className="text-md text-gray-500 leading-relaxed">{data.desc1}</p>
          <p className="text-md text-gray-500 leading-relaxed">{data.desc2}</p>
        </div>

        {/* Conditionally render the bullet points and arrows */}
        {validBullets.length > 0 && (
          <div className="flex flex-col gap-3 py-3">
            {validBullets.map((item) => (
              <div key={item.id} className="w-full flex gap-1">
                <ArrowForwardIosIcon
                  fontSize="small"
                  className="text-green-600"
                />
                <p className="text-gray-500">{item.points}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
