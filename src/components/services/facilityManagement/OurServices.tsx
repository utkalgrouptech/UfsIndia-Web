import React from "react";
import CommonBulletDesc from "../../commonComponents/CommonBulletDesc";
import CommonForm from "../../commonComponents/CommonForm";

const data1 = {
  title: "Technical Services:",
  desc1:
    "UFS is a leading provider of the full spectrum of life cycle services for in critical facilities, by Deploying technically experienced on-site personnel and technology to map and maintain our customer’s assets at optimal levels delivering long term value to their facilities, by adopting a whole life approach to asset management and maintenance which underpins the implementation of a holistic asset maintenance regime.",
  desc2:
    "Our onsite personnel seamlessly integrate into our {`client’s`} operational structures in the planning and delivery of bespoke solutions based on portfolio, facility requirements and objectives.",
  ServiceBulletArr: [
    { id: 1, points: "Electrician" },
    { id: 2, points: "Plumber" },
    { id: 3, points: "Multi Skill Technician" },
    { id: 4, points: "Mechanical Engineer" },
    { id: 5, points: "Electrical Engineer" },
    { id: 6, points: "STP Operator" },
    { id: 7, points: "HVAC Operator" },
    { id: 8, points: "WTP Operator" },
    { id: 9, points: "Fire Technician" },
    { id: 10, points: "Lift Operator" },
    { id: 11, points: "Civil Engineer" },
    { id: 12, points: "Welder" },
  ],
};

const data2 = {
  title: "Soft Services:",
  desc1:
    "Soft services are those which include high human intervention. This includes cleaning, pantry service, help desk service, gardener, mail service, waste management services. It’s other than hard Technical services which support the operation of the facility are generally classified as soft FMS.",
  desc2: "",
  ServiceBulletArr: [
    { id: 1, points: "Office Boy" },
    { id: 2, points: "Mail Room Boy" },
    { id: 3, points: "Receptionist" },
    { id: 4, points: "Pantry boy" },
    { id: 5, points: "Rider" },
    { id: 6, points: "Driver" },
    { id: 7, points: "Concierge" },
    { id: 8, points: "Computer Operator" },
    { id: 9, points: "Cook" },
    { id: 10, points: "KST" },
    { id: 11, points: "Steward" },
    { id: 12, points: "Care Taker" },
    { id: 13, points: "Façade cleaner" },
    { id: 14, points: "Pest control Technician" },
    { id: 15, points: "Gardner" },
  ],
};

const data3 = {
  title: "Security Services",
  desc1:
    "We offer Security services as one of our core services available for a variety of reasons for both long and short term requirements. We provide man guards as per Indian Standards as well as being trained to the highest standards and fully licensed, trained, experienced, ability to implement and follow comprehensive assignment instructions agreed with our clients. Our selected security personnel can undertake a variety of assignments including reception cover, access control, loading bay and car park management.",
  desc2: "",
  ServiceBulletArr: [
    { id: 1, points: "Man Guard" },
    { id: 2, points: "Gun Man" },
    { id: 3, points: "Event Security" },
    { id: 4, points: "Patrolling Guard" },
    { id: 5, points: "Personal Security" },
    { id: 6, points: "VVIP Security" },
    { id: 7, points: "Traffic Security" },
    { id: 8, points: "Ex-Army Guard" },
    { id: 9, points: "Building Security" },
    { id: 10, points: "CCTV Operator" },
  ],
};

const data0 = {
  title: "Facility Management Services:",
  desc1:
    "It is a profession that encompasses multiple disciplines to ensure functionality, comfort, safety and efficiency of the built environment by integrating people, place, process and technology, At UFS we provide technical services, soft services and security services.",
  desc2: "",
  ServiceBulletArr: [], // Empty array to demonstrate conditional rendering
};

const OurServices = () => {
  return (
    <section className=" flex w-full lg:flex-row flex-col pt-10 px-3 lg:px-0">
      <div className="w-full">
      <CommonBulletDesc data={data0} />
      <CommonBulletDesc data={data1} />
      <CommonBulletDesc data={data2} />
      <CommonBulletDesc data={data3} />

      </div>

      <div className="w-full">
      <CommonForm/>
      </div>
    </section>
  );
};

export default OurServices;
