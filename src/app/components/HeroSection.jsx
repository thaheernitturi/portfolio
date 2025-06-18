"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            Thaheer Nitturi
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "MERN Stack Developer",
              1000,
              "UI/UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-[#ADB7BE] text-lg sm:text-xl lg:text-2xl"
            repeat={Infinity}
          />

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-6 mb-6">
            I&apos;m a passionate developer who thrives on solving real-world problems with
            elegant, efficient, and scalable solutions.
          </p>

          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white hover:bg-slate-200"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white mt-3 inline-block"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Contact Me
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full"
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
