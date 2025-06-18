import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-[#121212] z-10">
      <div className="container mx-auto px-6 py-6 flex justify-center items-center">
        <Link
          href="/"
          className="group flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-md shadow-md opacity-90 group-hover:opacity-100 transition duration-300"
          />
          
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
