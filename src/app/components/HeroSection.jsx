"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16 bg-gradient-to-b from-[#1c0e2a] via-[#1b0c29] to-[#0d0619]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start px-4"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            Thaheer Nitturi
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "MERN Stack Developer",
              1500,
              "UI/UX Designer",
              1500,
            ]}
            wrapper="span"
            speed={40}
            className="text-[#C9AFFF] text-lg sm:text-xl lg:text-2xl block mt-2"
            repeat={Infinity}
          />

          <p className="text-[#C9AFFF] text-base sm:text-lg lg:text-xl mt-6 mb-6 max-w-xl">
            I&apos;m a passionate developer who thrives on solving real-world problems with
            elegant, efficient, and scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/thaheernitturi.pdf"
              target="_blank"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-600 text-white font-semibold shadow-md"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-1 py-1 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-600 text-white font-semibold shadow-md"
            >
              <span className="block bg-[#121212] hover:bg-[#1c1c1c] rounded-full px-5 py-2">
                Contact Me
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="col-span-4 place-self-center mt-10 lg:mt-0"
        >
          <div className="relative rounded-full bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 p-1 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] shadow-xl shadow-purple-700/40">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full object-cover"
              fill
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
