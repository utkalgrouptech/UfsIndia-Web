import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ContactUsHome from '../components/contactUs/ContactUsHome'
import CommonPoster from '../components/commonComponents/CommonPoster'
import CommonBreadcrumb from '../components/commonComponents/CommonBreadcrumb'
import { banner_job } from '../assets/company/about'

const data={
  img:banner_job,
  cont1:"GET IN TOUCH!",
  cont2:"",
  cont3:"Tell us what you need. Fill in your details below and",
  cont4:"we'll get back to you as soon as we can or call us at +91 9776666555",
}
const data1 = {
  cont1: "Tell us what you need. Fill in your details below and we'll get back to you ",
  cont2: " as soon as we can or call us at 9776666555",
  cont3: "GET A QUOTE",
};


export default function contactUs() {
  return (
    <MainLayout>
<CommonBreadcrumb data={data}/>
    <ContactUsHome/> 
    <CommonPoster data={data1}/>
    </MainLayout>
  )
}
