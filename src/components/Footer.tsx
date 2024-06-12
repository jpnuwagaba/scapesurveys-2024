import React from "react";
import Image from "next/image";
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-blue/10 mt-16">
        <div className="container text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            <div className="flex flex-col items-start gap-5">
              <Image
                src="/assets/logo.png"
                width={100}
                height={100}
                className="w-16 md:w-24"
                alt="logo"
              />
              <p>Fraine Supermarket building, Ntinda - 2nd Floor, Rm 5</p>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Mail size={"18px"} />
                  <p>info@scapesurveys.com</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Phone size={"18px"} />
                  <p>+256 763006857</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <Link href={""}>
                  <Instagram color="#2b388f"/>
                </Link>
                <Link href={""}>
                  <Twitter color="#2b388f"/>
                </Link>
                <Link href={""}>
                  <Linkedin color="#2b388f"/>
                </Link>
              </div>
            </div>
            <div className="flex md:flex-col items-center md:items-start gap-4">
              <div className="font-bold text-blue text-lg">Links</div>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/services"}>Services</Link>
              <Link href={"/projects"}>Projects</Link>
            </div>
            <div className="md:col-span-2">
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
        </div>
        <div className="bg-blue py-3 text-xs text-white">
          <div className="container flex flex-row items-center justify-between">
            <p>All Rights Reserved © Scapes And Surveys Associates 2024</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
