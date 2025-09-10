import { ReactElement } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveNaveBar from "./ResponsiveNavbar";

type Prop = {
  title?: string;
  description?: string;
  children: ReactElement | ReactElement[];
};

export default function MainLayout({
  children,
  title = "Utkal Facility Services",
  description = "We provide the best facility management services to meet your needs.",
}: Prop) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Utkal Facility Services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <Header />
      <ResponsiveNaveBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
