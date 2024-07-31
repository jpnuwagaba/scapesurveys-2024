import React from "react";
import Flex from "./Flex";
import Contactform from "./Contactform";

const Contactsection = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/heroimg.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
      className="py-12 md:py-24"
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity as needed
          zIndex: 1,
        }}
      >
        {/* Mesh overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "3px 3px", // Size of the grid cells
            zIndex: 2,
            pointerEvents: "none", // Ensures the mesh doesn't interfere with interactions
          }}
        ></div>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <h3 className="container text-green font-bold text-2xl lg:text-3xl mb-8">
          Contact Scapes & Surveys Associates
        </h3>
        <Flex
          child1={
            <div className="lg:mr-20 text-gray-50">
              <p>
                Scapes and Surveys Associates offers specialized land surveying
                and geospatial services, catering to various project
                requirements. Our team is prepared to assist clients in
                achieving their project goals.
              </p>
              <p className="mt-3">
                To provide you with the most accurate quote, we kindly ask for
                the following information:
              </p>
              <ul className="list-disc ml-5 my-3">
                <li>
                  <p>
                    What is the purpose of your project? 
                  </p>
                </li>
                <li>
                  <p>
                    What type of site are you working on?
                  </p>
                </li>
                <li>
                  <p>
                    Can you provide an approximate size of the area to be
                    surveyed?
                  </p>
                </li>
                <li>
                  <p>Where is the location of the property?</p>
                </li>
                <li>
                  <p>
                    Is there any additional information that might be relevant?
                    (e.g., access restrictions, specific regulations, or any
                    special site conditions)
                  </p>
                </li>
              </ul>
              <p>
                If you&apos;re unsure about any of these details, do not worry! Our
                expert team is here to guide you through the process. Feel free
                to reach out with any questions you might have; we are always
                happy to help!
              </p>
              <h4 className="font-bold text-xl uppercase mt-5 md:mt-8">Speak to an expert - +256 763006857</h4>
            </div>
          }
          child2={
            <>
              <Contactform />
            </>
          }
        />
      </div>
    </div>
  );
};

export default Contactsection;
