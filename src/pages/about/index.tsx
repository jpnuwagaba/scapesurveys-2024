import Hero2 from "@/components/Hero2";
import Team from "@/components/Team";
import React from "react";

const index = () => {
  return (
    <>
      <Hero2
        bgImage="assets/energy.jpg"
        title="About Us"
        subtitle="Discover our commitment to precision and excellence in land surveying."
      />
      <h2 className="container text-4xl font-bold text-blue my-5 md:my-8 text">
        Our Story
      </h2>
      <p className="container text-lg">
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
      <Team />
    </>
  );
};

export default index;
