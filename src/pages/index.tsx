import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Clients from "@/components/Clients";
import ServiceSection from "@/components/ServiceSection";
import ProjectSection from "@/components/ProjectSection";
import CoreValues from "@/components/CoreValues";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scapes & Surveys Associates</title>
        <meta
          name="description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />

        {/* icon */}
        <link rel="icon" href="/assets/icon.svg" />

        {/* keywords */}
        <meta name="keywords" content="land, surveying, geomatics, Uganda, scapes, surveys, lidar, surveys" />

        {/* Open Graph Metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Scapes & Surveys Associates" />
        <meta
          property="og:description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta property="og:url" content="https://scapesurveys.com" />
        <meta property="og:image" content="/assets/logo.png" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scapes & Surveys Associates" />
        <meta
          name="twitter:description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta name="twitter:image" content="/assets/logo.png" />
        <meta name="twitter:site" content="@scapesurveys.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="http://scapesurveys.com" />
      </Head>
      <main className={``}>
        <div className="grid grid-cols-1 gap-12 md:gap-24">
          <Hero />
          <InfoSection
            imageSrc="/assets/about.jpeg"
            header="About Us"
            paragraph="Welcome to Scapes and Surveys Associates, a leading survey firm based in Kampala, Uganda, specializing in Geomatics and Land Management. Since our establishment in 2010, we have been dedicated to providing precise and reliable solutions through the expertise of highly qualified office and field professionals. Our commitment to inclusivity and innovation drives us to create a better future for everyone."
            buttonText="Read more"
            buttonLink="about"
          />
          <ServiceSection />
          {/* <CoreValues /> */}
          <ProjectSection />
          <Clients />
        </div>
      </main>
    </>
  );
}
