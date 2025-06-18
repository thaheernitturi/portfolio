"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] backdrop-blur-lg border-b border-[#33353F] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Logo + Title - Clickable */}
        <Link href="/" className="flex items-center space-x-3 z-10 group transition duration-300 hover:scale-105">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-lg shadow-md"
          />
          
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="z-10 block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-gray-500 text-gray-300 hover:text-white hover:border-white transition"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex z-10">
          <ul className="flex space-x-10 text-white font-medium text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
