import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import client from "../../sanity/sanity.client";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Contactsection from "./Contactsection";

export type ServiceType = {
  name: string;
  description: string;
  slug: string;
  imageUrl: any;
  imageUrl2: any;
  _id: string;
};

const Footer = () => {
  const [services, setServices] = useState<ServiceType[]>([]);
  const query = `*[_type == "service"]{
    _id,
    name,
    details,
    slug,
    "imageUrl": serviceImage.asset->url,
    "imageUrl2": serviceIcon.asset->url
  }`;

  const servicesClient = async () => {
    await client
      .fetch(query)
      .then((result) => {
        setServices(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    servicesClient();
  }, []);

  return (
    <footer className="bg-gray-100 mt-16">
      <Contactsection />
      <div className="container mx-auto py-16">
        <div className="flex flex-wrap gap-16 justify-between">
          <div className="flex-1">
            <Image
              src="/assets/logo.png"
              width={100}
              height={100}
              className="w-24"
              alt="logo"
            />
            <p className="mt-4 text-gray-700">
              Fraine Supermarket building, Ntinda - 2nd Floor, Rm 5
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={"18px"} />
                <p className="text-gray-700">info@scapesurveys.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={"18px"} />
                <p className="text-gray-700">+256 763006857</p>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <Link href={"/"}>
                <FaInstagram  color="#405DE6" size={'1.5rem'}/>
              </Link>
              <Link href={"/"}>
                <FaXTwitter color="#1DA1F2" size={'1.5rem'}/>
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn color="#0077B5" size={'1.5rem'}/>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-blue">Links</h4>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-blue">Services</h4>
            <div className="mt-4 flex flex-col gap-2">
              {services.map((service) => (
                <Link
                  key={service._id}
                  href={`/services/${(service.slug as any).current}`}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.741723265378!2d32.61038681457186!3d0.3550322997409743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba3099d6aaa9%3A0x617f2f54a372666!2sFraine%20Supermarket%20(Ntinda)!5e0!3m2!1sen!2sug!4v1664260368323!5m2!1sen!2sug"
            style={{
              width: `100%`,
              height: `300px`,
              border: 0,
              borderRadius: `10px`,
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-blue py-3 text-white">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between">
          <p>All Rights Reserved © Scapes And Surveys Associates 2024</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
