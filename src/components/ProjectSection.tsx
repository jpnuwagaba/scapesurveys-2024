import React, { useState, useEffect, useCallback } from "react";
export type ProjectType = {
  name: string;
  category: string;
  location: string;
  details: string;
  imageUrl: string;
  slug: { current: string };
};
import client from "../../sanity/sanity.client";
import Project from "./Project";
import PriorityProject from "./PriorityProject";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectSection = () => {
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
        setProjects(result.slice(0, 3));
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
    <div>
      <h2 className="container text-3xl md:text-4xl font-bold text-blue pb-5 md:pb-8 text-center">
        Recent Projects
      </h2>
      {/* <PriorityProject /> */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {projects.map((project, index) => (
          <div key={index}>
            <Project
              name={project.name}
              imgSrc={project.imageUrl}
              link={`/projects/${project.slug.current}`}
              description={project.details}
              location={project.location}
              category={project.category}
            />
          </div>
        ))}
      </div>
      <div className="container flex flex-col items-center">
        <Link href={"/projects"}>
          <Button>View All Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
