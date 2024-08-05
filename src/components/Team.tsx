import React, { useState, useEffect } from "react";
import Image from "next/image";
import client from "../../sanity/sanity.client";

export type TeamMemberType = {
  name: string;
  position: string;
  image: string;
  isAdmin: boolean;
};

const Team = () => {
  const [team, setTeam] = useState<TeamMemberType[]>([]);
  const [admin, setAdmin] = useState<TeamMemberType[]>([]);

  const query = `*[_type == 'teamMember' && position == "Managing Partner"] | order(name desc){
    _id,
    name,
    position,
    "image": image.asset->url,
    isAdmin
  }`;

  const query2 = `*[_type == 'teamMember' && position != "Managing Partner"] {
    _id,
    name,
    position,
    "image": image.asset->url,
    isAdmin
  }`;
  

  const adminClient = async () => {
    try {
      const result = await client.fetch(query);
      setAdmin(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    adminClient();
  }, []);

  const teamClient = async () => {
    try {
      const result = await client.fetch(query2);
      setTeam(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    teamClient();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="tracking-tighter text-3xl md:text-4xl font-bold text-blue text-center">
              Meet Our Team
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our talented team of experts is dedicated to delivering
              exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
          {admin.map((member, index) => (
            <div key={index} className="bg-white rounded-lg">
              <img
                className="h-[280px] w-full rounded-t-lg object-cover"
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
              />
              <div className="p-4 bg-blue text-white rounded-b-lg">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-200">{member.position}</p>
              </div>
            </div>
          ))}
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg">
              <img
                className="h-[280px] w-full rounded-t-lg object-cover"
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
              />
              <div className="p-4 bg-blue text-white rounded-b-lg">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-200">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
