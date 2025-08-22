import { ReactElement, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveNaveBar from "./ResponsiveNavbar";


type Prop = {
  title?: string;
  children: ReactElement | ReactElement[];
};

export default function MainLayout({
  children,
  title = "Utkal Facility Services",
}: Prop) {
  return (
    <>
      <Header />
    <ResponsiveNaveBar/>
      <>{children}</>
      <Footer />
    </>
  );
}
