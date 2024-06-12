import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative"
       style={{
        backgroundImage: 'url(/assets/surveyor-img.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 py-24 md:py-48">
          <h1 className="text-4xl lg:text-7xl font-bold text-white z-40">
            Safe, Reliable & High Quality Surveys
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
