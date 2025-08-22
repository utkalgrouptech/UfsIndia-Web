"use client"
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Aboutus from "../components/company/companyProfile/Aboutus";
import Missons from "../components/company/companyProfile/Missons";
import Poster from "../components/company/companyProfile/Poster";
import CommonBreadcrumb from "../components/commonComponents/CommonBreadcrumb";
import {  banner_job } from "../assets/company/about";
const data={
  img:banner_job,
  cont1:"About Utkal Facility",
  cont2:"Services Pvt. Ltd.",
  cont3:"Utkal Facility Services Pvt. Ltd. is a trusted source for a wide range of security",
  cont4:"and facilities management services.",
}

export default function Company() {
  return (
    <MainLayout>
      <CommonBreadcrumb data={data}/>
      <Aboutus/>
      <Missons/>
      <Poster/>
    </MainLayout>
  );
}
