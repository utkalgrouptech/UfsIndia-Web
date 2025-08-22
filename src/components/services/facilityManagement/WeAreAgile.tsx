import Link from "next/link";
import React from "react";

export default function WeAreAgile() {
  return (
    <section className="lg:px-24 lg:w-3/5  py-5 flex px-3  flex-col gap-5">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full  space-y-2 ">
          <h1 className="text-2xl text-gray-600 ">{`We’re`} agile and able.</h1>
          <p className="text-md text-gray-500 leading-relaxed">
          In our community, plumbing is an essential service. It involves hard work and skill, with a focus on delivering quality service. We are committed to minimizing inconvenience while ensuring that all tasks are completed efficiently and safely. For any plumbing needs, please reach out to us for professional assistance.
          </p>
        </div>
      </div>

      <div className="w-full h-20 border rounded bg-gray-100 center px-3 lg:px-6">
        <p className="text-gray-500 text-md">
          If you have any problem or query regarding our service, please{" "}
          <span className="text-gray-700"> contact us </span> or call at{" "}
          <Link href="tel:+919776666555" className="text-blue-500">9776666555</Link>.
        </p>
      </div>

    </section>
  );
}
