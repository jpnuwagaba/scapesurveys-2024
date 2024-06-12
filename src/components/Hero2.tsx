import React, { FC } from "react";
import Breadcrumb from "./Breadcrumb";

interface Props {
  bgImage: string;
  title: string;
  subtitle: string;
}

const Hero2: FC<Props> = ({ bgImage, title, subtitle }) => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative">
      <div className="h-[50px]"></div>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 z-0 opacity-90"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10 opacity-50"></div>
      <div className="container px-4 md:px-6 relative z-20">
        <div className="grid gap-4 md:gap-6">
          <Breadcrumb />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            {title}
          </h1>
          <p className="max-w-[700px] text-gray-50 md:text-xl dark:text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
