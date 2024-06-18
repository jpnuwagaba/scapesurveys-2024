import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface props {
  service: string;
  icon: any;
  link: string;
}

const Service: FC<props> = ({ service, icon, link }) => {
  return (
    <>
      <Link href={`/${link}`}>
        <div className="rounded-lg p-8 bg-blue/10 flex flex-col items-center gap-4 hover:bg-blue/20 h-full">
          <img className="h-12" src={icon} alt="service-icon" />
          <h3 className="text-xl font-bold text-center text-blue">{service}</h3>
        </div>
      </Link>
    </>
  );
};

export default Service;
