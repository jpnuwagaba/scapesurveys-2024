import Hero2 from "@/components/Hero2";
import Team from "@/components/Team";
import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>About Us | Scapes & Surveys Associates</title>
        <link rel="icon" href="/assets/logo.png" />
        <meta
          name="description"
          content="Scapes & Surveys Associates is a Land Surveying firm based in Uganda"
        />
        <meta name="keywords" content="Scapes, Surveys, Associates" />
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
        Scapes and Surveys is a survey firm based in Kampala Uganda with
        competencies in fields of Geomatics and Land Management. Established in
        2010, and is now providing precise and reliable solutions pertaining to
        the field through hands-on skills of over twenty five qualified office
        and field men. We are an inclusive working society and interested in
        making the future better for everyone. In 2010, Arthur Akanga and Diana
        Abeho started Scapes and Surveys Associates with the vision of reaching
        needs of millions of people in Uganda and around the world. They have
        since then ensured that Scapes and Surveys Associates evolves around
        strong humanitarian and socially inclusive working principles, making it
        a company where anyone can work. Today, Scapes and Surveys Associates is
        one of the leading firms in the disciplines of Land Surveying and
        Geomatics.
      </p>
      </div>
      <Team />
    </>
  );
};

export default index;
