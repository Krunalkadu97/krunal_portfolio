"use client";

import React, {useEffect, useState } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useInView,
} from "framer-motion";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ProjectTags } from "@/components/common/ProjectTag";
import {projects, activeTag, COLORS_TOP} from "@/components/helper/constants";


export const Portfolio = () => {
    const [isActive, setIsActive] = useState("All")
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

    const handleTagChange = (tag: string) => {
        setIsActive(tag)
    }
    const filterProject = projects.filter((item)=>item.tag.includes(isActive))
    return (
        <motion.section
            ref={ref}
            id="portfolio"
            className="py-32"
            style={{ backgroundImage }}
        >
        <div className="container mx-auto">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl text-white font-bold mb-12"
            >
            MY <span className="text-purple-400">Projects</span>
            </motion.h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                {activeTag.map((item)=>(
                    <ProjectTags 
                        key={item} 
                        title={item} 
                        onClick={handleTagChange}
                        isActive={isActive === item}
                    />
                ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filterProject.map((project) => (
                <ProjectCard
                key={project.id}
                imgUrl={project.image}
                title={project.title}
                description={project.description}
                />
            ))}
            </div>
        </div>
        </motion.section>
    );
};
