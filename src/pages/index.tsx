import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Broucher from "../components/home/Broucher";
import Clients from "../components/home/Clients";
import FAQ from "../components/home/Faq";
import GallerySec from "../components/home/FeaturedImages";
import FeaturedService from "../components/home/FeaturedService";
import OurServices from "../components/home/OurServices";
import Services from "../components/home/Services";
import Fade from "../components/home/Slider";
import MainLayout from "../layouts/MainLayout";



export default function Home() {
  return (
    <MainLayout> 
    <Fade/>
    <About/>
    <Broucher/>
    <Services/>
    <OurServices/>
    <FeaturedService/>
     <Clients/>
     <Banner/>
     <FAQ/>
     <GallerySec/>
    </MainLayout> 
  );
}
