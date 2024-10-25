import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import client from "../../../../sanity/sanity.client";
import Head from "next/head";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Hero2 from "@/components/Hero2";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Ruler } from "lucide-react";
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
  gallery: any[]; // Added gallery field
  mapLink: string; // Added mapLink field
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
    caseStudy,
    gallery,
    mapLink
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
            <div className="container py-8">

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card>
                  <CardContent className="flex items-start p-4">
                    <MapPin className="h-5 min-w-5 mr-2 text-blue" />
                    <div>
                      <p className="text-sm font-bold text-gray-700">Location</p>
                      <p className="text-sm ">{project.location || "Not specified"}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start p-4">
                    <Calendar className="h-5 min-w-5 mr-2 text-blue" />
                    <div>
                      <p className="text-sm font-bold text-gray-700">Project Date</p>
                      <p className="text-sm ">{duration}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start p-4">
                    <Users className="h-5 min-w-5 mr-2 text-blue" />
                    <div>
                      <p className="text-sm font-bold text-gray-700">Client</p>
                      <p className="text-sm ">{project.client || "Not specified"}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start p-4">
                    <Ruler className="h-5 min-w-5 mr-2 text-blue" />
                    <div>
                      <p className="text-sm font-bold text-gray-700">Services</p>
                      <p className="text-sm uppercase">{project.category || "Not specified"}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {project.mapLink && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-blue">Project Map</h2>
                  <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
                    <iframe
                      src={project.mapLink}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue">Project Description</h2>
                <PortableText value={project.details} />
                <div className="mt-6">
                  <Link href={`/${project.caseStudy}`}>
                    <Button>
                      Download Case Study
                      <DownloadIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {project.gallery.map((image, i) => (
                      <img
                        key={i}
                        src={`/${image.asset.url}`}
                        alt={`Gallery image ${i + 1}`}
                        className="w-full h-[200px] object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
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