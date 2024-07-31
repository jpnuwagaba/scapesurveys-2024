import React, { useState, useEffect } from "react";
import client from "../../sanity/sanity.client";
import Client from "./Client";

export type clientType = {
  name: string;
  logo: any; // Adjust according to your logo type
};

const Clients = () => {
  const [clients, setClients] = useState<clientType[]>([]);
  const query = `*[_type == "client"]{
    name,
    logo,
  }`;

  const fetchClient = async () => {
    try {
      const result = await client.fetch(query);
      setClients(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <div className="container">
      <h3 className="container text-3xl md:text-4xl font-bold text-blue mb-5 md:mb-8 text-center">
        Trusted by
      </h3>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8">        
        {clients.map((client) => (
          <Client 
            key={client.name}
            name={client.name}
            logo={client.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
