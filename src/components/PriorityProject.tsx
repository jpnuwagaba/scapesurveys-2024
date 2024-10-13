import React, { useState, useEffect } from "react";
import InfoSection from "./InfoSection";
import client from "../../sanity/sanity.client";
import { PortableText } from "@portabletext/react";

export type PriorityProjectType = {
  name: string;
  category: string;
  location: string;
  details: any;
  imageUrl: string;
  slug: { current: string };
};

const PriorityProject = () => {
  const [priorityProject, setPriorityProject] = useState<PriorityProjectType | null>(null);

  const query = `*[_type == 'project']|order(orderRank)[0]{
    name,
    category,
    location,
    details,
    "imageUrl": image.asset->url,
    slug
  }`;

  const fetchPriorityProject = async () => {
    try {
      const result = await client.fetch(query);
      if (result) {
        setPriorityProject(result);
        console.log(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPriorityProject();
  }, []);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  if (!priorityProject) {
    return <div>Loading...</div>;
  }

  const truncatedDetails = priorityProject.details.map((block: any) => {
    if (block._type === "block") {
      return {
        ...block,
        children: block.children.map((child: any) => {
          if (child._type === "span") {
            return {
              ...child,
              text: truncateText(child.text, 40),
            };
          }
          return child;
        }),
      };
    }
    return block;
  });

  return (
    <InfoSection
      imageSrc={priorityProject.imageUrl}
      header={priorityProject.name}
      paragraph={<PortableText value={truncatedDetails} />}
      buttonText="Learn More"
      buttonLink={`/projects/${priorityProject?.slug?.current}`}
    />
  );
};

export default PriorityProject;