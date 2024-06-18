import React from "react";
import Hero2 from "@/components/Hero2";
import Services from "@/components/Services";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Services | Scapes & Surveys Associates</title>
        <link rel="icon" href="/assets/logo.png" />
        <meta
          name="description"
          content="Scapes & Surveys Associates is a Land Surveying firm based in Uganda"
        />
        <meta name="keywords" content="Scapes, Surveys, Associates" />
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
