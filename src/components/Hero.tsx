import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[80vh] flex items-center justify-start"
      style={{
        backgroundImage: "url(/assets/heroimg.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50"
        style={{ zIndex: 1 }}
      >
        {/* Mesh overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "5px 5px", // Size of the grid cells
            zIndex: 2,
            pointerEvents: "none", // Ensures the mesh doesn't interfere with interactions
          }}
        ></div>

        {/* Lines */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 3 }}
        >
          {/* Horizontal line 1 (25% from the top) */}
          {/* <div
            style={{
              position: "absolute",
              top: "25%",
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: "#ede7e6",
              zIndex: 3,
            }}
          ></div> */}

          {/* Horizontal line 2 (25% from the bottom) */}
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: "gray",
              zIndex: 3,
            }}
          ></div>

          {/* Vertical line (30% from the right) */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "30%",
              bottom: 0,
              width: "2px",
              backgroundColor: "gray",
              zIndex: 3,
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="container grid lg:w-[75%] m-0 py-24 md:py-48" style={{ position: "relative", zIndex: 4 }}>
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white z-40 pt-16 md:pt-0">
          Your <span className="text-blue">Partners</span> in Land Surveying and <span className="text-green">Geo-solutions</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
