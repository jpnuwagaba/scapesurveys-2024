import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import client from "../../../../sanity/sanity.client";
import Hero2 from "@/components/Hero2";
import Head from "next/head";

export type ServiceType = {
  name: string;
  details: any;
  slug: string;
  imageUrl: any;
  imageUrl2: any;
};

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true); // To handle loading state

  const query = `*[_type == "service" && slug.current == $slug]{
    _id,
    name,
    details,
    slug,
    "imageUrl": serviceImage.asset->url,
    "imageUrl2": serviceIcon.asset->url
  }`;

  const fetchService = useCallback(async (slug: string) => {
    try {
      const result = await client.fetch(query, { slug });
      setService(result);
      setLoading(false);
      console.log("Fetched service data:", result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (slug) {
      fetchService(slug as string); // Ensure slug is string
    }
  }, [slug, fetchService]);

  if (loading) {
    return <div>Loading...</div>; // Optionally, add a loading indicator
  }

  return (
    <>
      {service.length > 0 && (
        <>
          <Head>
            <title>{`${service[0].name} | Scapes & Surveys Associates`}</title>
            <meta name="description" content={service[0].details} />
            <meta property="og:title" content={service[0].name} />
            <meta property="og:description" content={service[0].details} />
            <meta property="og:image" content={service[0].imageUrl} />
          </Head>
          <div>
            <Hero2
              title={service[0].name}
              subtitle={""}
              bgImage={`${service[0].imageUrl}`}
            />
            <section className="container w-full py-8 md:py-12">
              <p className="text-lg">{service[0].details}</p>
              {/* <PortableText value={service[0].details} /> */}
            </section>
          </div>
        </>
      )}
      {service.length === 0 && !loading && <div>No service found</div>}
    </>
  );
};

export default ServicePage;
