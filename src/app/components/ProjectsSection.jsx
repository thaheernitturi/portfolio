"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Adaptive Ensemble Contrastive Learning for Vessel Type Recognition	",
    description: "Developed a vessel image classifier using GANs, transfer learning, and ensemble methods to boost accuracy and optimize training with limited data.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thaheernitturi/ShipClassification",
    previewUrl: "https://genai-chat.vercel.app",
  },
  {
    id: 2,
    title: "Paytm Clone",
    description: "A full-stack FinTech clone with wallet, payment gateway, and transaction history.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thaheernitturi/paytm-clone",
    previewUrl: "https://github.com/thaheernitturi/paytm-clone",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A stylish personal portfolio to showcase my skills, projects, and contact details.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thaheernitturi/portfolio.git",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20 px-6 bg-[#0f0f0f]">
      <h2 className="text-center text-4xl font-extrabold text-white mb-12 tracking-wide">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul
        ref={ref}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
