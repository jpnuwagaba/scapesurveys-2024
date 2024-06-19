import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="relative"
        style={{
          backgroundImage: "url(/assets/heroimg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="container grid lg:w-[60%] m-0 py-24 md:py-48">
          <h1 className="text-4xl lg:text-7xl font-bold text-white z-40">
            Your Partners in Pure Land Surveying and Geo-solutions
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
