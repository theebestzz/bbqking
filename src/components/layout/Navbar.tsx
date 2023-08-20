"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Logo from "../utils/Logo";
import CartIcon from "../icons/CartIcon";
import { MdPhone } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`h-12 text-main p-4 flex items-center max-sm:justify-center justify-around border-b-2 border-b-main uppercase sticky top-0 z-10 bg-white duration-500 bg-opacity-90 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="text-2xl">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <div className="bg-amber-500 hover:scale-110 duration-500 max-sm:hidden p-2 rounded-full cursor-pointer flex items-center gap-2">
          <MdPhone /> 444 0 444
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
