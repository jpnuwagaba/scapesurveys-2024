import React from "react";
import Flex from "./Flex";
import Image from "next/image";

const corevalues = [
  {
    image: "/assets/handshake1.png",
    alt: "integrity",
    title: "Integrity",
    text: "We value trust via honesty, transparency, and ethics in all we do.",
  },
  // add professionalism, quality, and experiencee
  {
    image: "/assets/managers.png",
    alt: "professionalism",
    title: "Professionalism",
    text: "We uphold professional standards in our work, conduct, and communication, delivering excellent service with a dedication to excellence.",
  },
  {
    image: "/assets/quality.png",
    alt: "quality",
    title: "Quality",
    text: "We are relentless in our pursuit of quality, delivering solutions and experiences that consistently exceed expectations.",
  },
  {
    image: "/assets/mapping (2).png",
    alt: "experience",
    title: "Experience",
    text: "We leverage the expertise of our team, combining seasoned knowledge with fresh perspectives to deliver innovative and effective solutions.",
  },
];

const CoreValues = () => {
  return (
    <>
      <Flex
        child1={
          <>
            <div className="mb-6 lg:mb-0 lg:mr-16">
            <h2 className="text-4xl font-bold text-blue">
              Our Values
            </h2>
            <div className="bg-green h-1 my-5 md:my-8 w-16"></div>
            <div className="grid grid-cols-2 gap-8">
              {corevalues.map((corevalue) => (
                <div className="" key={corevalue.alt}>
                  <Image
                    src={corevalue.image}
                    alt={corevalue.alt}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                    className="bg-blue/10 p-2 rounded-lg"
                  />
                  <h3 className="text-xl font-bold text-blue my-2">
                    {corevalue.title}
                  </h3>
                  {/* <p className="text-sm text-gray-700">{corevalue.text}</p> */}
                </div>
              ))}
            </div>
            </div>
          </>
        }
        child2={
          <>
            
            <Image
              className="w-full rounded-xl"
              src={"/assets/workwithus2.jpeg"}
              alt="our values"
              width={500}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </>
        }
      />
    </>
  );
};

export default CoreValues;
