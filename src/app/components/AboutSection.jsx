"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Icons
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";
import {
  SiExpress,
  SiSequelize,
  SiGooglecloud,
  SiCisco,
  SiWalmart,
} from "react-icons/si";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
        <li className="rounded-full p-4 bg-black/20 text-green-400 text-4xl transition transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50">
          <FaNodeJs />
        </li>
        <li className="rounded-full p-4 bg-black/20 text-gray-300 text-4xl transition transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-300/50">
          <SiExpress />
        </li>
        <li className="rounded-full p-4 bg-black/20 text-indigo-400 text-4xl transition transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-400/50">
          <SiSequelize />
        </li>
        <li className="rounded-full p-4 bg-black/20 text-yellow-300 text-4xl transition transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-300/50">
          <FaJs />
        </li>
        <li className="rounded-full p-4 bg-black/20 text-cyan-400 text-4xl transition transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50">
          <FaReact />
        </li>
        <li className="rounded-full p-4 bg-black/20 text-orange-500 text-4xl transition transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
          <FaHtml5 />
        </li>
        <li className="rounded-full p-4 bg-black/20 text-blue-500 text-4xl transition transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
          <FaCss3Alt />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SASTRA Deemed to be UNIVERSITY</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none grid grid-cols-2 gap-6 place-items-center">
        <li>
          <a
            href="/certifications/cisco-cert.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 flex items-center justify-center rounded-full bg-black/20 text-blue-600 text-4xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50"
          >
            <SiCisco />
          </a>
        </li>
        <li>
          <a
            href="/certifications/walmart-cert.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 flex items-center justify-center rounded-full bg-black/20 text-[#0071CE] text-4xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-[#0071CE]/50"
          >
            <SiWalmart />
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Me"
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-base lg:text-lg text-[#C9AFFF]"
          >
            I am a full stack web developer with a passion for building scalable
            and user-friendly applications. I specialize in Python, JavaScript,
            and modern web frameworks like Streamlit, and have hands-on
            experience with SQL, APIs, and responsive design. I enjoy solving
            real-world problems through clean, efficient code and continuous
            learning. I&apos;m a fast learner, a strong team player, and always eager
            to collaborate on impactful projects.
          </motion.p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
