import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarPadding, setNavbarPadding] = useState("py-4");
  const [navbarBg, setNavbarBg] = useState("bg-white/90");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarPadding("py-2");
      } else {
        setNavbarPadding("py-4");
      }
      if (window.scrollY > 0) {
        setNavbarBg("bg-white");
      } else {
        setNavbarBg("bg-white/90");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed ${navbarBg} w-full z-50 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`container flex flex-row items-center justify-between ${navbarPadding} transition-all duration-300 ease-in-out`}
        >
          <Link href={"/"}>
            <Image
              src="/assets/logo.png"
              width={100}
              height={100}
              className="w-[90px] md:w-24"
              alt="logo"
            />
          </Link>
          <div className="hidden lg:flex flex-row items-center gap-5 text-sm font-bold">
            <Link className="hover:text-blue" href="/">
              Home
            </Link>
            <Link className="hover:text-blue" href="/about">
              About Us
            </Link>
            <Link className="hover:text-blue" href="/services">
              Services
            </Link>
            <Link className="hover:text-blue" href="/projects">
              Projects
            </Link>
          </div>
          <Link className="hidden lg:block" href="mailto:info@scapesurveys.com">
            <Button>info@scapesurveys.com</Button>
          </Link>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="lg:hidden cursor-pointer"
          >
            {showMenu ? (
              <X color="#2b388f" size={'2.5rem'}/>
            ) : (
              <AlignJustify color="#2b388f" size={'2.5rem'}/>
            )}
          </div>
        </div>
        <div
          className="container flex flex-col items-center gap-4 text-sm font-bold py-8"
          style={showMenu ? { display: "flex" } : { display: "none" }}
        >
          <Link onClick={() => { setShowMenu(false) }} className="hover:text-blue" href="/">
            Home
          </Link>
          <Link onClick={() => { setShowMenu(false) }} className="hover:text-blue" href="/about">
            About Us
          </Link>
          <Link onClick={() => { setShowMenu(false) }} className="hover:text-blue" href="/services">
            Services
          </Link>
          <Link onClick={() => { setShowMenu(false) }} className="hover:text-blue" href="/projects">
            Projects
          </Link>
          <Link onClick={() => { setShowMenu(false) }} href="mailto:info@scapesurveys.com">
            <Button>info@scapesurveys.com</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
