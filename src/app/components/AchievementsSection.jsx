"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  { metric: "Projects", value: "4", postfix: "+" },
  { metric: "Certifications", value: "5" },
];

const AchievementsSection = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-[#0f0f0f]">
      <div className="border border-[#33353F] bg-gradient-to-br from-[#1e1e1e] to-[#121212] rounded-2xl px-8 sm:px-16 py-10 flex flex-col md:flex-row items-center justify-around gap-10 shadow-md shadow-black/30">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:drop-shadow-lg"
          >
            <h2 className="text-white text-5xl md:text-6xl font-extrabold flex items-center gap-1 drop-shadow-md">
              {achievement.prefix || ""}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-5xl md:text-6xl font-extrabold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (i + 1),
                })}
              />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-lg md:text-xl mt-2 font-medium tracking-wide">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
