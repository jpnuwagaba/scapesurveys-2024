import React, { useEffect, useState } from "react";
import Service from "./Service";
export type ServiceType = {
  name: string;
  description: string;
  slug: string;
  imageUrl: any;
  imageUrl2: any;
};
import client from "../../sanity/sanity.client";

const Services = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  const query = `*[_type == "service"]{
    _id,
    name,
    details,
    slug,
    "imageUrl": serviceImage.asset->url,
    "imageUrl2": serviceIcon.asset->url
  }`;

  const servicesClient = async () => {
    await client
      .fetch(query)
      .then((result) => {
        setServices(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    servicesClient();
  }, [servicesClient]);

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6">
        {services &&
          services.map((service, index) => (
            <div className="h-full" key={index}>
              <Service
                service={service.name}
                icon={service.imageUrl2}
                link={`/services/${(service.slug as any).current}`}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Services;