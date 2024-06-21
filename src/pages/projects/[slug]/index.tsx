import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import client from "../../../../sanity/sanity.client";
import Head from "next/head";
import { PortableText } from "@portabletext/react";
import Hero2 from "@/components/Hero2";

export type ProjectType = {
  name: string;
  category: string;
  location: string;
  details: any;
  imageUrl: any;
  slug: string;
};

const Index = () => { // Renamed to start with an uppercase letter
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);

  const query = `*[_type == 'project' && slug.current == $slug]{
    _id,
    name,
    category,
    location,
    details,
    "imageUrl": image.asset->url,
    slug,
  }`;

  const fetchProject = async (slug: string) => {
    try {
      const data = await client.fetch(query, { slug });
      setProject(data[0]);
      setLoading(false);
    } catch (e) {
      console.error("Error fetching data:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchProject(slug as string);
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{project?.name || "Project"}</title>
        <link rel="icon" href="/assets/logo.png" />
        <meta
          name="description"
          content="Scapes & Surveys Associates is a Land Surveying firm based in Uganda"
        />
        <meta name="keywords" content="Scapes, Surveys, Associates" />
      </Head>
      <div>
        {project ? (
          <>
            <Hero2
              title={project.name}
              subtitle={""}
              bgImage={`${project.imageUrl}`}
            />
            <section className="container w-full lg:w-[70%] lg:m-auto py-8 md:py-12 text-lg">
              <PortableText value={project.details} />
            </section>
          </>
        ) : (
          <div>No project found</div>
        )}
      </div>
    </>
  );
};

export default Index;
