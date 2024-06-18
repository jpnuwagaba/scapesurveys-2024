import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Clients from "@/components/Clients";
import ServiceSection from "@/components/ServiceSection";
import ProjectSection from "@/components/ProjectSection";
import CoreValues from "@/components/CoreValues";
import { Metadata, ResolvingMetadata } from "next";


export const metadata: Metadata = {
  title: "Scapes & Surveys Associates",
  description: "Scapes & Surveys Associates is a Land Surveying firm based in Uganda",
};

export default function Home() {
  return (
    <>      
      <main className={``}>
        <div className="grid grid-cols-1 gap-12 md:gap-24">
          <Hero />
          <InfoSection
            imageSrc="/assets/about.jpeg"
            header="About Us"
            paragraph="Scapes and Surveys is a survey firm based in Kampala Uganda with competencies in fields of Geomatics and Land Management. Established in 2010, and is now providing precise and reliable solutions pertaining to the field through hands-on skills of over twenty five qualified office and field men. We are an inclusive working society and interested in making the future better for everyone."
            buttonText="Read more"
            buttonLink=""
          />
          <Clients />
          <ServiceSection />
          <CoreValues />
          <ProjectSection />
        </div>
      </main>
    </>
  );
}
