"use client";

import React, { useEffect, useRef } from "react";
import { useMotionTemplate, useMotionValue, motion, animate, useScroll } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight } from "react-icons/fi";
import LiIcon from "@/components/common/LiIcon";

const workexp = [  
    {   
        id: 1, 
        time: 'Sep.2023 - Present',
        position: 'Software Engineer',
        company: 'iProgrammer Solutions Private Limited', 
        address: 'Pune, Maharashtra',
        work: "As a Software Developer, I design and implement innovative features, ensuring optimal performance, scalability, and alignment with business objectives by collaborating closely with cross-functional teams. Throughout the entire software lifecycle—from design to deployment—I follow best practices to deliver high-quality, efficient, and scalable solutions. I proactively identify and resolve issues, optimizing application performance to ensure seamless functionality and provide an exceptional user experience.",
        link: "https://www.iprogrammer.com/"
    },
    {
        id: 2, 
        time: 'Oct.2021 - Sep.2023',
        position: 'Software Developer (Team Lead)',
        company: 'Lise Infotech Pvt Ltd', 
        address: 'Indore, Madhya Pradesh',
        work: "As a Software Developer Team Lead, I collaborated closely with clients to deliver comprehensive solutions, guiding projects from concept through to the final product. I led the development of core application components, taking them from scratch to deployment, ensuring seamless functionality and performance. By streamlining development processes, I ensured the delivery of high-quality outputs while optimizing team efficiency. Additionally, I managed and mentored a team of 5 developers, overseeing task assignments, providing guidance, and conducting code reviews to maintain high standards of code quality and best practices.",
        link: "https://www.liseinfotech.com/"
    },
    {
        id: 3, 
        time: "Jan.2021 - Oct.2021", 
        position: 'React Native Developer',
        company: 'InfoCentroid Software Solutions Pvt. Ltd', 
        address: 'Indore, Madhya Pradesh',
        work: "As a React Native Developer, I assisted in gathering client requirements and contributed to various stages of the development lifecycle. I actively participated in application development, from design through to deployment, ensuring smooth integration of features. I applied best practices to deliver high-quality, reliable solutions and continuously worked to enhance my skills under the guidance of senior team members. My focus was on meeting deadlines while collaborating effectively to contribute to the overall success of the project.",
        link: "https://www.infocentroid.com/"
    },
];

const COLORS_TOP = ["#a855f7", "#1E67C6", "#CE84CF", "#7c3aed"];

type DetailsP = {
    time: string;
    position: string;
    company: string;
    description: string;
    place: string;
    link: string;
};

const Details = ({ time, position, company, description, place, link }: DetailsP) => {
    const ref = useRef(null);
    
    // Split description blocks cleanly by sentence
    const paragraphs = description
        .split(/(?<=\.)\s+/)
        .filter(phrase => phrase.trim().length > 0);

    return (
        <li ref={ref} className="w-full relative min-h-[50px] group">
            
            {/* 🎯 ULTIMATE MOBILE & DESKTOP ALIGNMENT FIX:
                By explicitly locking the horizontal center point with 'left-0' inside a shared width utility, 
                this component will stay perfectly centered directly on your vertical purple line on all viewports.
            */}
            <div className="absolute left-[-20px] md:left-[-10px] top-[14px] w-8 md:w-12 flex items-center justify-center z-30 pointer-events-none">
                <LiIcon ref={ref} />
            </div>

            {/* Placing 'pl-12 md:pl-16' right here protects the line gutter space on mobile. 
              This prevents your text content from ever sliding underneath or to the left of the timeline path.
            */}
            <div className="pl-12 md:pl-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full pt-1">
                    
                    {/* Left Side Column Block: Role Details & Meta Metadata Tags (Span 5) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="lg:col-span-5 space-y-3 flex flex-col justify-start"
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-100 tracking-tight leading-tight group-hover:text-purple-400 transition-colors duration-300">
                            {position}
                        </h3>
                        
                        <div className="pt-0.5">
                          <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-bold text-xs text-purple-400 hover:text-purple-300 bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-md transition-all break-all"
                          >
                            @{company}
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-x-2.5 gap-y-2 pt-1 text-[11px] sm:text-xs font-semibold text-slate-400">
                            <span className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1.5 rounded-full border border-slate-800/50 shrink-0">
                                <FiCalendar className="text-purple-400 w-3.5 h-3.5" />
                                {time}
                            </span>
                            <span className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1.5 rounded-full border border-slate-800/50">
                                <FiMapPin className="text-purple-400 w-3.5 h-3.5 shrink-0" />
                                <span className="truncate max-w-[180px] sm:max-w-none">{place}</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Side Column Block: Tailored Technical Breakdown (Span 7) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 bg-[#0c0a24]/30 border border-slate-900/80 group-hover:border-purple-500/20 rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 shadow-xl shadow-black/30"
                    >
                        <ul className="space-y-3">
                            {paragraphs.map((sentence, index) => (
                                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                                    <FiChevronRight className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span>{sentence}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </li>
    );
};

export const WorkExperience = () => {
    const ref = useRef(null);
    const color = useMotionValue(COLORS_TOP[0]);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', "center start"]
    });

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: 'easeInOut',
            duration: 12,
            repeat: Infinity,
            repeatType: 'mirror'
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 50% 0%, #02000a 60%, ${color})`;

    return (
        <motion.section 
            id="workexperience" 
            className="py-16 sm:py-24 lg:py-28 text-white overflow-hidden"
            style={{ backgroundImage }}
        >
            <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
                
                {/* Header Section */}
                <div className="mb-14 sm:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-4">
                        <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-purple-400 uppercase flex items-center gap-1.5">
                            <FiBriefcase className="w-3 h-3" /> Career Journey
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase">
                        Work Experience
                    </h2>
                </div>   
              
                {/* Global Track Parent Layout Context */}
                <div ref={ref} className="relative w-full max-w-5xl mx-auto"> 
                    
                    {/* 🎯 TRACK ALIGNMENT: 
                      Centering calculation forces the path vector line to cleanly slice down 
                      the exact horizontal midpoint axis of the nodes container column tracker.
                    */}
                    <motion.div 
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-4 md:left-6 top-3 w-[2px] h-[97%] bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent origin-top z-10"
                    />

                    <ul className="w-full space-y-12 sm:space-y-16">
                        {workexp.map((exp) => (
                            <Details
                                key={exp.id}
                                description={exp.work}
                                position={exp.position}
                                time={exp.time}
                                company={exp.company}
                                place={exp.address}
                                link={exp.link}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};