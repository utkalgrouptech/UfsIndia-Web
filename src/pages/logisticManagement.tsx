import React from "react";
import Home from "../components/services/logisticsManagement/Home";
import CommonBreadcrumb from "../components/commonComponents/CommonBreadcrumb";
import MainLayout from "../layouts/MainLayout";
import CommonPoster from "../components/commonComponents/CommonPoster";
import { service_banner } from "../assets/services";

const data = {
  img: service_banner,
  cont1: "Logistics and Warehouse ",
  cont2: "Management Service",
  cont3: "",
  cont4: "",
};

const data1 = {
  cont1: "Complete Residential and Commercial Plumbing & Drain Services",
  cont2: "in Odisha ,Hyderabad and Banglore ",
  cont3: "GET A QUOTE",
};

export default function logisticManagement() {
  return (
    <>
      <MainLayout>
        <CommonBreadcrumb data={data} />
        <Home />
        <CommonPoster data={data1} />
      </MainLayout>
    </>
  );
}
