import React from "react";
import Flex from "./Flex";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <Flex
        child1={
          <>
            <Image
              src="/assets/about.jpeg"
              width={500}
              height={100}
              className="w-full"
              alt="logo"
            />
          </>
        }
        child2={
          <>
            <div className="mt-8 lg:mt-0 lg:pl-10 flex flex-col gap-4 bg-blue text-white h-full">
              <h2 className="font-bold text-3xl">About Us</h2>
              <p>
                Scapes and Surveys is a survey firm based in Kampala Uganda with
                competencies in fields of Geomatics and Land Management.
                Established in 2010, and is now providing precise and reliable
                solutions pertaining to the field through hands-on skills of
                over twenty five qualified office and field men. We are an
                inclusive working society and interested in making the future
                better for everyone.
              </p>
              <Link className="lg:block" href={"/about"}>
            <Button variant={'white'}>Read more</Button>
          </Link>              
            </div>
          </>
        }
      />
    </>
  );
};

export default AboutUs;
