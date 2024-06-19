import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import client from "../../../../sanity/sanity.client";
import Hero2 from "@/components/Hero2";
import Head from "next/head";
import { PortableText } from "@portabletext/react";

export type ServiceType = {
  name: string;
  details: any;
  slug: string;
  imageUrl: any;
  imageUrl2: any;
};

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState<ServiceType | null>(null);
  const [loading, setLoading] = useState(true);

  const query = `*[_type == "service" && slug.current == $slug]{
    _id,
    name,
    details,
    slug,
    "imageUrl": serviceImage.asset->url,
    "imageUrl2": serviceIcon.asset->url
  }`;

  const fetchService = async (slug: string) => {
    try {
      const result = await client.fetch(query, { slug });
      setService(result[0]);
      setLoading(false);
      console.log("Fetched service data:", result[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchService(slug as string);
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{service?.name || "Service"}</title>
      </Head>
      <div>
        {service ? (
          <>
            <Hero2
              title={service.name}
              subtitle={""}
              bgImage={`${service.imageUrl}`}
            />
            <section className="container w-full py-8 md:py-12">
              <PortableText value={service.details} />
            </section>
          </>
        ) : (
          <div>No service found</div>
        )}
      </div>
    </>
  );
};

export default Index;
