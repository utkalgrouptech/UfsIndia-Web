import React from "react";
import GalleryBreadCrumb from "../components/company/gallery/GalleryBreadCrumb";
import MainLayout from "../layouts/MainLayout";
import CommonPoster from "../components/commonComponents/CommonPoster";

const data={

  cont1:"For any inquiries, questions, complaints, commendations, please call:",
  cont2:"+91 8260500785 contact us to get more information.",
  cont3:"GET A QUOTE",

}

export default function gallery() {
  return (
    <>
      <MainLayout>
        <GalleryBreadCrumb />
      <CommonPoster data={data}/>
      </MainLayout>
    </>
  );
}
