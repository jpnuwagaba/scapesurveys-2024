import React, { useState, useEffect, useCallback } from "react";
export type ProjectType = {
  name: string;
  category: string;
  location: string;
  details: string;
  imageUrl: any;
  slug: { current: string };
};
import client from "../../../sanity/sanity.client";
import Hero2 from "@/components/Hero2";
import Link from "next/link";
import Project from "@/components/Project";
import Head from "next/head";

const Index = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const query = `*[_type == 'project']|order(orderRank){
    _id,
    name,
    category,
    location,
    details,
    "imageUrl": image.asset->url,
    slug,
  }`;

  const projectsClient = async () => {
    await client
      .fetch(query)
      .then((result) => {
        setProjects(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    projectsClient();
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta name="keywords" content="Scapes, Surveys, Associates" />

        {/* open graph metadata */}
        <meta property="og:title" content="Projects" />
        <meta property="og:description" content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda." />
        <meta property="og:url" content="https://scapesurveys.com/projects" />
        <meta property="og:image" content="/assets/logo.png" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects" />
        <meta
          name="twitter:description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta name="twitter:image" content="/assets/logo.png" />
        {/* <meta name="twitter:site" content="@scapesurveys.com/projects" /> */}

        {/* Canonical URL */}
        {/* <link rel="canonical" href="http://scapesurveys.com" /> */}
      </Head>
      <Hero2
        bgImage="assets/nic2.jpeg"
        title="Our Projects"
        subtitle="Showcasing our expertise through successful and diverse land surveying projects."
      />
      <div className="mt-8 md:mt-12"></div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {projects.map((project) => (
          <Project
            key={project.slug.current} // Add a unique key prop
            name={project.name}
            imgSrc={project.imageUrl}
            link={`/projects/${project.slug.current}`}
            description={project.details}
            location={project.location}
            category={project.category}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
