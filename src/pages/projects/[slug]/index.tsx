import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import client from "../../../../sanity/sanity.client";
import Head from "next/head";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Hero2 from "@/components/Hero2";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  format,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export type ProjectType = {
  name: string;
  category: string;
  location: string;
  details: any;
  imageUrl: any;
  slug: string;
  client: string;
  duration: string;
  startDate: string;
  endDate: string;
  status: string; // Added status field
  caseStudy: any; // Added caseStudy field
};

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);

  const query = `*[_type == 'project' && slug.current == $slug]{
    name,
    category,
    location,
    details,
    "imageUrl": image.asset->url,
    slug,
    client,
    status,
    startDate,
    endDate,
    caseStudy
  }`;

  const fetchProject = async (slug: string) => {
    try {
      const data = await client.fetch(query, { slug });
      setProject(data[0]);
      setLoading(false);
    } catch (e) {
      console.error("Error fetching data:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchProject(slug as string);
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const computeDuration = (
    startDate: string,
    endDate: string,
    status: string
  ) => {
    const start = new Date(startDate);
    const end = status === "ongoing" ? new Date() : new Date(endDate);

    const formattedStartDate = format(start, "d MMMM yyyy");
    const formattedEndDate =
      status === "ongoing" ? "to Date" : format(end, "d MMMM yyyy");

    const totalDays = differenceInDays(end, start);

    const years = differenceInYears(end, start);
    const months = differenceInMonths(end, start) - years * 12;
    const weeks = Math.floor((totalDays - (years * 365 + months * 30)) / 7);
    const days = totalDays - (years * 365 + months * 30 + weeks * 7);

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
    if (weeks > 0) parts.push(`${weeks} week${weeks > 1 ? "s" : ""}`);
    if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);

    const duration = parts.slice(0, 2).join(" & ") || "0 days";

    return `${formattedStartDate} to ${formattedEndDate} (${duration})`;
  };

  const duration =
    project?.startDate && project?.endDate
      ? computeDuration(project.startDate, project.endDate, project.status)
      : "Not specified";

  return (
    <>
      <Head>
        <title>{project?.name || "Project"}</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="description"
          content="Scapes & Surveys Associates offers expert land surveying and geomatics services in Uganda."
        />
        <meta name="keywords" content="Scapes, Surveys, Associates" />
      </Head>
      <div>
        {project ? (
          <>
            <Hero2
              title={project.name}
              subtitle={""}
              bgImage={`${project.imageUrl}`}
            />
            <div className="w-full lg:min-w-[400px] container lg:hidden py-5 lg:py-8">
              <Card className="bg-muted p-6 shadow-lg order-1 md:order-2">
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Client</h3>
                    <p>{project.client || "Not specified"}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Services</h3>
                    <p className="uppercase text-xs bg-nicegreen p-1 rounded inline text-white">{project.category || "Not specified"}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p>{project.location || "Not specified"}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Duration</h3>
                    <p>{duration}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href={`/${project.caseStudy}`}>
                    <Button>
                      Download Case Study
                      <DownloadIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
            <div className="my-8 md:my-16 container flex flex-reverse flex-col items-start lg:flex-row gap-8 lg:gap-16">
              <section className="text-justify lg:text-left text-lg">
                <PortableText value={project.details} />
              </section>
              <div className="hidden lg:block w-full lg:min-w-[400px] ">
                <Card className="bg-muted p-6 shadow-lg order-1 md:order-2">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Client</h3>
                      <p>{project.client || "Not specified"}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Services</h3>
                      <p className="uppercase text-xs bg-nicegreen p-1 rounded inline text-white">{project.category || "Not specified"}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Location</h3>
                      <p>{project.location || "Not specified"}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Duration</h3>
                      <p>{duration}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                  <Link href={`/${project.caseStudy}`}>
                    <Button>
                      Download Case Study
                      <DownloadIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  </div>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <div>No project found</div>
        )}
      </div>
    </>
  );
};

export default Index;

function DownloadIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function XIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
