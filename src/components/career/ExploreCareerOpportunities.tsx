import React from "react";
import FAQ from "./Faq";
import Link from "next/link";



export default function  ExploreCareerOpportunities() {
  return (
    <section className="lg:main-container w-full flex flex-col lg:flex-row py-5 px-3" >
      <div className="w-full  space-y-2 ">
        <h1 className="text-3xl">Explore career opportunities With UFS</h1>
        <p className="text-md text-gray-500 leading-relaxed">
          At UFS, we are always on the lookout for People who believes in keeping
          Client above everyone and everything else, We filled with some
          innovative and intelligent smart brains, we do extremely well at the
          facility management industry. If you have the willingness to strive
          for global standards and excellence as well the potential to prove
          yourself to make some actual difference, UFS is the right place for
          you.
        </p>
        <FAQ/>
      </div>
     
      <div className="w-full flex flex-col  items-center gap-10">

        <div className=" border-8 border-gray-300 p-7 lg:w-[60%] flex flex-col gap-3">
          <h1 className="text-xl ">Contact Information</h1>
          <p className="font-bold text-md text-gray-600">
            Utkal Facility Services Pvt. Ltd
          </p>
          <p className=" text-md text-gray-600">
          Arya Surya Enclave, Plot No- K5/475,

Khata No 95/937, Fourth Floor, Mouza-

Subudhi Pur, Kalinga Vihar, Patrapada,

Bhubaneswar, Dist- Khurda,

Odisha, India-751019.
          </p>

          <div className="text-md">
            <p className="font-bold text-md text-gray-600">Contact Number</p>
            <p> <Link href={'tel:+919776666555'}>Phone: 8260500785</Link></p>
          </div>

          <div className="text-md">
            <p className="font-bold text-md text-gray-600">Email</p>
            <p> <Link href={'mailto:+info@utkalfacility.com'}>info@utkalfacility.com</Link></p>
          </div> 
        </div>

        <div className="lg:w-[60%]">
          <div className="bg-blue-900 h-60 w-full flex flex-col p-5">
            <p className=" text-white font-bold text-md">
            Send Your Updated CV
            </p>
            
            <p className=" text-white  text-md ">
            You can send your updated CV to <br /> <span className="text-yellow-500"><Link href={'mailto:+talent@ufsindia.in'}>hrmanager@utkalfacility.com</Link>  </span>and our recruitment  <br />team will get back to you as per your <br /> corresponding job opening.
             
            </p>
          </div>
        </div>

    

      </div>
    
    </section>
  );
}
