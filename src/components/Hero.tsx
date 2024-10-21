import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/hero-2.jpg"
        alt="Construction site with cranes"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="uppercase mb-4 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Your Partners in Land Surveying and <span className="text-green">Geo-solutions</span>
        </h1>
        <p className="mx-auto max-w-3xl text-center text-xl sm:text-2xl">
          Leaders in Surveying, Aerial Mapping, 3D Scanning and advanced survey solutions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
