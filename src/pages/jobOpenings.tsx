import React from "react";
import MainLayout from "../layouts/MainLayout";
import CommonBreadcrumb from "../components/commonComponents/CommonBreadcrumb";
import ExploreCareerOpportunities from "../components/career/ExploreCareerOpportunities";
import { banner_job } from "../assets/company/about";
import ExploreInDemand from "../components/career/ExploreInDemand";

const data = {
  img: banner_job,
  cont1: "Work with UFS",
  cont2: "",
  cont3:
    "UFS provides excellent career opportunities for talented People who embrace",
  cont4:
    " the UFS values and culture and can contribute towards building a successful business.",
};

export default function jobOpenings() {
  return (
    <MainLayout>
      <CommonBreadcrumb data={data} />
      <ExploreCareerOpportunities />
      <ExploreInDemand />
    </MainLayout>
  );
}
