"use client";

import React, { useEffect, useState, useRef } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ProjectTags } from "@/components/common/ProjectTag";
import { projects, activeTag, COLORS_TOP } from "@/components/helper/constants";
import { FiLayers } from "react-icons/fi";

export const Portfolio = () => {
  const [isActive, setIsActive] = useState<string>("All");
  const color = useMotionValue(COLORS_TOP[0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const controls = animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => controls.stop();
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 50% 0%, #030014 55%, ${color})`;

  const handleTagChange = (tag: string) => {
    setIsActive(tag);
  };

  // Safe data array filtering logic supporting multi-category strings
  const filteredProjects = projects.filter((item) =>
    isActive === "All" ? true : item.tag.some((t) => t.toLowerCase() === isActive.toLowerCase())
  );

  return (
    <motion.section
      ref={sectionRef}
      id="portfolio"
      className="py-24 lg:py-32 text-white overflow-hidden relative"
      style={{ backgroundImage }}
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Symmetric Top Control Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
              <span className="text-[11px] font-semibold tracking-wider text-purple-400 uppercase flex items-center gap-1.5">
                <FiLayers className="w-3 h-3" /> Proven Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              MY <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          {/* Frosted Modern Tag Capsule Deck */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/40 p-1.5 rounded-2xl border border-slate-800/50 backdrop-blur-md self-start md:self-auto">
            {activeTag.map((item) => (
              <ProjectTags
                key={item}
                title={item}
                onClick={handleTagChange}
                isActive={isActive === item}
              />
            ))}
          </div>
        </div>

        {/* Unified Project Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="h-full flex"
            >
              <ProjectCard
                imgUrl={project.image}
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};