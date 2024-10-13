import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { Button } from "./ui/button";

interface InfoSectionProps {
  imageSrc: string | React.ReactNode;
  header: string;
  paragraph: React.ReactNode;
  buttonText: string;
  buttonLink: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  imageSrc,
  header,
  paragraph,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          {typeof imageSrc === "string" ? (
            <img
              src={imageSrc}
              alt={header}
              className="w-full h-full max-h-[480px] rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-l-xl object-cover"
            />
          ) : (
            imageSrc
          )}
        </div>
        <div className="flex flex-col items-start justify-center bg-blue p-4  md:p-8 rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-r-xl">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
            {typeof header === "string" ? header : <Skeleton width={200} />}
          </h2>
          <p className="mb-6 text-justify text-white text-lg">
            {typeof paragraph === "string" ? paragraph : <Skeleton count={3} />}
          </p>
          <Link href={`/${buttonLink}`}>
            <Button variant={"nicegreen"}>
              {typeof buttonText === "string" ? buttonText : <Skeleton width={100} />}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;