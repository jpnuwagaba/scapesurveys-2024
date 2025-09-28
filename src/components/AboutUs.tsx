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
              src="/assets/about2.jpeg"
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
                Welcome to Scapes and Surveys Associates, a leading survey firm
                based in Kampala, Uganda, specializing in Geomatics and Land
                Management. Since our establishment in 2010, we have been
                dedicated to providing precise and reliable solutions through
                the expertise of over twenty-five highly qualified office and
                field professionals. Our commitment to inclusivity and
                innovation drives us to create a better future for everyone.
              </p>
              <Link className="lg:block" href={"/about"}>
                <Button variant={"white"}>Read more</Button>
              </Link>
            </div>
          </>
        }
      />
    </>
  );
};

export default AboutUs;
