import React, { FC } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Props {
  name: string;
  imgSrc: string;
  description: string;
  link: string;
  location: string;
  category: string;
}

const Project: FC<Props> = ({ name, imgSrc, description, link, location, category }) => {
  return (
    <>
      <Link href={`/${link}`}>
        <Card className="w-full rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={`${imgSrc}`}
              alt="Project"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-5 left-5 bg-blue p-1.5 text-xs rounded text-white uppercase">{category}</div>
          </div>
          <CardContent className="p-6 space-y-2">
            <CardTitle className="text-xl text-blue font-semibold">
              {name}
            </CardTitle>
            <div className="flex items-center space-x-2 text-sm text-gray-800">
              <MapPinIcon className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default Project;

function MapPinIcon(
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
