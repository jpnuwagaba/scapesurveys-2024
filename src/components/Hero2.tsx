import React, { FC } from "react";
import Breadcrumb from "./Breadcrumb";

interface Props {
  bgImage: string;
  title: string;
  subtitle: string;
}

const Hero2: FC<Props> = ({ bgImage, title, subtitle }) => {
  return (
    <section className="w-full pt-12 md:pt-24">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2 text-center">
          <div className="h-6"></div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-blue">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">{subtitle}</p>
        </div>
      </div>
    </section>
    
  );
};

export default Hero2;
