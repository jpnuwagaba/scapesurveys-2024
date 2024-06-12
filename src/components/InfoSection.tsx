import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface InfoSectionProps {
  imageSrc: string;
  header: string;
  paragraph: any;
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
          <img src={imageSrc} alt={header} className="w-full h-full max-h-[480px] rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-l-xl object-cover" />
        </div>
        <div className="flex flex-col items-start justify-center bg-blue p-8 rounded-bl-xl rounded-br-xl lg:rounded-bl-none lg:rounded-r-xl">
          <h2 className="text-3xl text-white font-bold mb-4">{header}</h2>
          <p className="mb-4 text-white text-lg">{paragraph}</p>          
          <Link href={`/${buttonLink}`}>
            <Button variant={"white"}>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
