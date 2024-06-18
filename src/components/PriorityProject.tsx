import React, { useState, useEffect } from "react";
import InfoSection from "./InfoSection";
import client from "../../sanity/sanity.client";

export type PriorityProjectType = {
  name: string;
  category: string;
  location: string;
  summary: string; // Renamed to match the fetched data
  imageUrl: string;
  slug: { current: string }; // Adjusted type to match Sanity's slug structure
};

const PriorityProject = () => {
  const [priorityProject, setPriorityProject] = useState<PriorityProjectType | null>(null);

  const query = `*[_type == 'priorityProject'][0]{
    project->{
      name,
      category,
      location,
      "imageUrl": image.asset->url,
      slug
    },
    summary
  }`;

  const priorityprojectclient = async () => {
    try {
      const { project: { name, category, location, slug, "imageUrl": imageUrl }, summary, } = await client.fetch(query);
      setPriorityProject({ name, category, location, summary, imageUrl, slug });
      console.log(priorityProject);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    priorityprojectclient();
  }, []);

  if (!priorityProject) {
    return <div>Loading...</div>;
  }

  return (
    <InfoSection
      imageSrc={priorityProject.imageUrl}
      header={priorityProject.name}
      paragraph={priorityProject.summary}
      buttonText="Learn More"
      buttonLink={`/projects/${priorityProject?.slug?.current}`}
      />
  );
};

export default PriorityProject;
