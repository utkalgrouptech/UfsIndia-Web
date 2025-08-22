import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../components/requestAService/Home'
import CommonBreadcrumb from '../components/commonComponents/CommonBreadcrumb'
import { banner_job } from '../assets/company/about'

const data = {
    img: banner_job,
    cont1: "REQUEST SERVICE",
    cont2: "",
    cont3: "Please feel free to filling out the form bellow to", 
    cont4: "schedule your service or giving us a call.", 
  };

export default function requestAService() {
  return (
    <MainLayout>
<CommonBreadcrumb data={data}/>
    <Home/>
    </MainLayout>
  )
}
