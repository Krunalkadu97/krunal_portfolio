"use client";

import React, { useEffect, useRef } from "react";
import { useMotionTemplate, useMotionValue, motion, animate, useScroll } from "framer-motion";
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import LiIcon from "@/components/common/LiIcon";

const education = [  
    {   
        id: 1,
        type: 'Bachelor of Engineering in Information Technology', 
        time: '2015 - 2019',
        place: 'Sinhgad College of Engineering, Pune, Maharashtra',
        info: 'Earned a B.E. in Information Technology, building a strong core foundation in computer science principles, software development paradigms, data structures, and algorithmic management.',
        achievements: ["Specialized in scalable software application architecture", "Practical hands-on lab training in database management networks"]
    },
    {
        id: 2, 
        type: 'Higher Secondary Education (HSC)',
        time: '2014 - 2015', 
        place: 'Narayana Junior College, Hyderabad, Telangana',
        info: 'Completed rigorous pre-university Higher Secondary education with a targeted focus on advanced Mathematics, Physics, and Chemistry matrices.',
        achievements: ["Developed core conceptual aptitude engineering skills"]
    },
    {
        id: 3, 
        type: 'Secondary School Certificate (SSC)',
        time: '2012 - 2013',
        place: 'Lakhotiya Bhutada High School, Nagpur, Maharashtra',
        info: 'Successfully completed primary Secondary School foundations. This crucial phase catalyzed deep logical troubleshooting capabilities and a keen interest in computer science systems.',
        achievements: ["Graduated with an excellent academic profile framework"]
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

type DetailsP = {
    type: string;
    place: string;
    time: string;
    info: string;
    achievements: string[];
};

const Details = ({ type, time, place, info, achievements }: DetailsP) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="w-full relative min-h-[50px] group">
                   
                   {/* 🎯 ULTIMATE MOBILE & DESKTOP ALIGNMENT FIX:
                       By explicitly locking the horizontal center point with 'left-0' inside a shared width utility, 
                       this component will stay perfectly centered directly on your vertical purple line on all viewports.
                   */}
                   <div className="absolute left-[-20px] md:left-[-10px] top-[14px] w-8 md:w-12 flex items-center justify-center z-30 pointer-events-none">
                       <LiIcon ref={ref} />
                   </div>

            {/* Content box gutter wrapper protecting tracking line coordinates */}
            <div className="pl-12 md:pl-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full pt-1">
                    
                    {/* Left Meta-Data Column (Span 5) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="lg:col-span-5 space-y-3 flex flex-col justify-start"
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-100 tracking-tight leading-tight group-hover:text-emerald-400 transition-colors duration-300">
                            {type}
                        </h3>

                        <div className="flex flex-wrap gap-x-2.5 gap-y-2 pt-1 text-[11px] sm:text-xs font-semibold text-slate-400">
                            <span className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1.5 rounded-full border border-slate-800/50 text-emerald-400/90 shrink-0">
                                <FiCalendar className="w-3.5 h-3.5" />
                                {time}
                            </span>
                            <span className="flex items-center gap-1.5 bg-slate-900/60 px-2.5 py-1.5 rounded-full border border-slate-800/50">
                                <FiMapPin className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                                <span className="truncate max-w-[220px] sm:max-w-none">{place}</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Descriptive Card Block (Span 7) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 bg-[#050212]/40 border border-slate-900/80 group-hover:border-emerald-500/20 rounded-xl p-4 sm:p-5 backdrop-blur-md transition-all duration-300 shadow-xl shadow-black/40 space-y-4"
                    >
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                            {info}
                        </p>

                        {/* Premium micro-bullet highlights */}
                        <div className="border-t border-slate-900/60 pt-3 space-y-2">
                            {achievements.map((ach, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 font-semibold">
                                    <FiAward className="w-3.5 h-3.5 text-emerald-500/70 shrink-0" />
                                    <span>{ach}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </li>
    );
};

export const Education = () => {
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
            id="education" 
            className="py-16 sm:py-24 lg:py-28 text-white overflow-hidden"
            style={{ backgroundImage }}
        >
            <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
                
                {/* Modern Section Header */}
                <div className="mb-14 sm:mb-20 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-4">
                        <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-400 uppercase flex items-center gap-1.5">
                            <FiBookOpen className="w-3 h-3" /> Academic Foundations
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase">
                        Education
                    </h2>
                </div>   
              
                {/* Timeline Matrix Layout Wrapper Container */}
                <div ref={ref} className="relative w-full max-w-5xl mx-auto"> 
                    
                    {/* Animated Vertical Track Line - Perfectly centered inside left alignment gutters */}
                    <motion.div 
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-4 md:left-6 top-3 w-[2px] h-[96%] bg-gradient-to-b from-emerald-400 via-teal-500 to-transparent origin-top z-10"
                    />

                    <ul className="w-full space-y-12 sm:space-y-16">
                        {education.map((edu) => (
                            <Details
                                key={edu.id}
                                type={edu.type}
                                time={edu.time}
                                place={edu.place}
                                info={edu.info}
                                achievements={edu.achievements}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};