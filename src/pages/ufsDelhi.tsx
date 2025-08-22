import React from "react";
import Breadcrumb from "../components/company/ufsDelhi/BreadCrumb";
import MainLayout from "../layouts/MainLayout";
import Cards from "../components/company/ufsDelhi/Cards";
import WhatMakesUFS from "../components/company/ufsDelhi/WhatMakesUFS";
import OurServicesInclude from "../components/company/ufsDelhi/OurServicesInclude";
import BannerGray from "../components/company/ufsDelhi/BannerGray";
import ContactInformation from "../components/company/ufsDelhi/ContactInformation";

export default function ufsDelhi() {
  return (

      <MainLayout>
        <Breadcrumb />
        <Cards/>
    <WhatMakesUFS/>
    <OurServicesInclude/>
    <BannerGray/>
    <ContactInformation/>
      </MainLayout>
    
  );
}
