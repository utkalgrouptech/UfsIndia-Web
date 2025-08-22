import React from "react";
import Home from "../components/services/SkillManagement/Home";
import CommonBreadcrumb from "../components/commonComponents/CommonBreadcrumb";
import MainLayout from "../layouts/MainLayout";
import { service_banner } from "../assets/services";
import TemporarySkilled from "../components/services/SkillManagement/TemporarySkilled";
import CommonPoster from "../components/commonComponents/CommonPoster";

const data = {
  img: service_banner,
  cont1: "Skill Management",
  cont2: "Service",
  cont3: "",
  cont4: "",
};

const data1 = {
  cont1: "Complete Residential and Commercial Plumbing & Drain Services",
  cont2: "in Odisha ,Hyderabad and Banglore ",
  cont3: "GET A QUOTE",
};

export default function skillManagement() {
  return (
    <>
      <MainLayout>
        <CommonBreadcrumb data={data} />
        <Home />
        <TemporarySkilled />
        <CommonPoster data={data1} />
      </MainLayout>
    </>
  );
}
