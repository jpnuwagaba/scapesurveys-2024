import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Clients from "@/components/Clients";
import ServiceSection from "@/components/ServiceSection";
import ProjectSection from "@/components/ProjectSection";
import CoreValues from "@/components/CoreValues";
import { Metadata, ResolvingMetadata } from "next";

export const metadata: Metadata = {
  title: "Scapes & Surveys Associates",
  description:
    "Scapes & Surveys Associates is a Land Surveying firm based in Uganda",
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
            paragraph="Welcome to Scapes and Surveys Associates, a leading survey firm based in Kampala, Uganda, specializing in Geomatics and Land Management. Since our establishment in 2010, we have been dedicated to providing precise and reliable solutions through the expertise of over twenty-five highly qualified office and field professionals. Our commitment to inclusivity and innovation drives us to create a better future for everyone."
            buttonText="Read more"
            buttonLink=""
          />
          <Clients />
          <ServiceSection />
          {/* <CoreValues /> */}
          <ProjectSection />
        </div>
      </main>
    </>
  );
}
