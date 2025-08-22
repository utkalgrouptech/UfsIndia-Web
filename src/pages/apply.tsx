import React from "react";
import MainLayout from "../layouts/MainLayout";
import CommonBreadcrumb from "../components/commonComponents/CommonBreadcrumb";
import { banner_job } from "../assets/company/about";
import ApplyForm from "../components/career/ApplyForm";

const data = {
  img: banner_job,
  cont1: "Apply For Job",
  cont2: "",
  cont3: "UFS people are different. That’s what makes our",
  cont4: "business different and successful.",
};
export default function apply() {
  return (
    <MainLayout>
      <CommonBreadcrumb data={data} />
      <ApplyForm />
    </MainLayout>
  );
}
