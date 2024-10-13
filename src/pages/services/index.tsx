import React from "react";
import Hero2 from "@/components/Hero2";
import Services from "@/components/Services";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="description"
          content="Scapes & Surveys Associates is a Land Surveying firm based in Uganda"
        />
        <meta name="keywords" content="Scapes, Surveys, Associates, monitoring, lidar, aerial survey, cadastral, engineering, gis, remote sensing, 3d laser scanning, reality capture, land development, utility mapping, mining, uav" />

        {/* open graph metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta property="og:url" content="https://scapesurveys.com/services" />
        <meta property="og:image" content="/assets/logo.png" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta name="twitter:image" content="/assets/logo.png" />
        {/* <meta name="twitter:site" content="@scapesurveys.com/services" /> */}

        {/* Canonical URL */}
        {/* <link rel="canonical" href="http://scapesurveys.com/services" /> */}
      </Head>
      <Hero2
        bgImage="assets/land-surveying.jpg"
        title="Our Services"
        subtitle="Comprehensive surveying solutions tailored to meet your project needs."
      />
      <div className="mt-8 md:mt-24"></div>
      <Services />
    </>
  );
};

export default Index;
