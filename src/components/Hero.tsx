import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full min-h-[80vh] flex items-center justify-start"
        style={{
          backgroundImage: "url(/assets/heroimg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="container grid lg:w-[75%] m-0 py-24 md:py-48">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white z-40 pt-16 md:pt-0">
            Your <span className="text-blue">Partners</span> in Land Surveying and <span className="text-green">Geo-solutions</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
