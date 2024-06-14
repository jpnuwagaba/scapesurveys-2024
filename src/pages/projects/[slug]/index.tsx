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

const index = () => {
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
      {project && (
        <>
          <Head>
            <title>{project.name}</title>
            <meta name="description" content={project.details} />
            <meta property="og:title" content={project.name} />
            <meta property="og:description" content={project.details} />
            <meta property="og:image" content={project.imageUrl} />
          </Head>
          <div>
            <Hero2
              title={project.name}
              subtitle={""}
              bgImage={`${project.imageUrl}`}
            />
            <section className="container w-full py-8 md:py-12 text-lg">
              <PortableText value={project.details} />
            </section>
          </div>
        </>
      )}
      {!project && !loading && <div>No project found</div>}
    </>
  );
};

export default index;
