"use client"
import React from "react";
import HrAndPayroll from "../components/services/payrollManagement/HrAndPayroll";
import CommonBreadcrumb from "../components/commonComponents/CommonBreadcrumb";
import { service_banner } from "../assets/services";
import TechInfo from "../components/services/payrollManagement/TechInfo";
import MainLayout from "../layouts/MainLayout";
import CommonPoster from "../components/commonComponents/CommonPoster";

const data = {
  img: service_banner,
  cont1: "Payroll Management",
  cont2: "Service",
  cont3: "",
  cont4: "",
};

const data1 = {
  cont1: "Complete Residential and Commercial Plumbing & Drain Services",
  cont2: "in  Odisha ,Hyderabad and Bangalore .",
  cont3: "GET A QUOTE",
};

export default function payrollManagement() {
  return (
    <>
      <MainLayout>
        <CommonBreadcrumb data={data} />
        <HrAndPayroll />
        <TechInfo />
        <CommonPoster data={data1} />
      </MainLayout>
    </>
  );
}
