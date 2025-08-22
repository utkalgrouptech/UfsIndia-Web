import React from "react";
import OurServices from "../components/services/facilityManagement/OurServices";
import CommonBreadcrumb from "../components/commonComponents/CommonBreadcrumb";
import { service_banner } from "../assets/services";
import MainLayout from "../layouts/MainLayout";
import CommonBulletDesc from "../components/commonComponents/CommonBulletDesc";
import WeAreAgile from "../components/services/facilityManagement/WeAreAgile";
import CommonPoster from "../components/commonComponents/CommonPoster";

const data = {
  img: service_banner,
  cont1: "Facility Management",
  cont2: "Service",
  cont3: "",
  cont4: "",
};



const data4 = {
  cont1:"Tell us what you need. Fill in your details below and we'll get back to you as",
  cont2:"soon as we can or call us at 9776666555.",
  cont3:"GET A QUOTE",
};

export default function FacilityManagement() {
  return (
    <MainLayout>
      <CommonBreadcrumb data={data} />
      <OurServices />
      <WeAreAgile />
      <CommonPoster data={data4} />
    </MainLayout>
  );
}



