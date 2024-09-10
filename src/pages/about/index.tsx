import Hero2 from "@/components/Hero2";
import Team from "@/components/Team";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>About Us | Scapes & Surveys Associates</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta
          name="keywords"
          content="Scapes, Surveys, Associates, about, story, history, surveying, company"
        />

        {/* open graph metadata */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Us | Scapes & Surveys Associates"
        />
        <meta
          property="og:description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        {/* <meta property="og:url" content="https://scapesurveys.com/about" /> */}
        <meta property="og:image" content="/assets/logo.png" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Scapes & Surveys Associates"
        />
        <meta
          name="twitter:description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta name="twitter:image" content="/assets/logo.png" />
        {/* <meta name="twitter:site" content="@scapesurveys.com" /> */}

        {/* Canonical URL */}
        {/* <link rel="canonical" href="http://scapesurveys.com" /> */}
      </Head>
      <Hero2
        bgImage="assets/energy.jpg"
        title="About Us"
        subtitle="Discover our commitment to precision and excellence in land surveying."
      />
      <div className="lg:w-[70%] m-auto">
        <h2 className="container text-3xl md:text-4xl font-bold text-blue my-4 md:my-6 text-center">
          Our Story
        </h2>
        <p className="container text-lg text-justify">
          Scapes and Surveys is a Kampala-based survey firm specializing in
          Geomatics and Land Management. Founded in 2010 by Arthur Akanga and
          Diana Abeho, the company aims to meet the needs of millions in Uganda
          and beyond. With a skilled team of over 25 professionals, Scapes and
          Surveys provides precise and reliable solutions while fostering an
          inclusive work environment. The firm is committed to strong
          humanitarian values and has become a leader in Land Surveying and
          Geomatics.
        </p>
      </div>
      <Team />
    </>
  );
};

export default index;
