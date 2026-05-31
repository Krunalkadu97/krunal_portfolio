"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import mylogo from "@/components/assets/My.png";

import {
  FiArrowRight,
  FiDownload,
  FiMapPin,
  FiMail,
  FiCheck,
  FiUser,
  FiCode,
  FiBriefcase,
  FiUsers,
  FiLayers,
  FiAward,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaReact,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const SUMMARY_ITEMS = [
  "5.5+ years of experience in React Native, React.js and modern web technologies",
  "Led cross-functional teams to deliver scalable and high-quality products",
  "Built applications used by 1M+ users across fintech, e-commerce and enterprise domains",
  "Strong expertise in TypeScript, Redux, MobX, Next.js and clean architecture",
  "Passionate about AI tools, performance optimization and best engineering practices",
];

const SKILLS = [
  { name: "React Native", percentage: 95, icon: FaReact, color: "#61DBFB" },
  { name: "React.js", percentage: 95, icon: FaReact, color: "#61DBFB" },
  { name: "Next.js", percentage: 90, icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", percentage: 90, icon: SiTypescript, color: "#3178C6" },
  { name: "Redux / MobX", percentage: 90, icon: SiRedux, color: "#764ABC" },
  { name: "Leadership", percentage: 90, icon: FiUsers, color: "#A855F7" },
];

export const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const onResumeDownloadClick = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Krunal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <section id="about" className="py-20 bg-[#030014] text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        
        {/* Top Typography Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-5">
            <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase flex items-center gap-1.5">
              <FiUser className="w-3 h-3" /> About Me
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-4xl leading-[1.15]">
            Building scalable mobile & web products with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              leadership, innovation
            </span>{" "}
            and impact.
          </h2>

          <p className="mt-4 text-gray-400 text-base max-w-2xl font-medium">
            Team Lead and Senior Software Developer with <span className="text-purple-400 font-semibold">5.5+ years</span> of experience delivering high-performance applications that solve real-world problems.
          </p>
        </div>

        {/* Dynamic Multi-Column Dashboard Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Column 1: Left Profile Card (Span 3) */}
          <div className="md:col-span-3 bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-between backdrop-blur-md">
            <div className="w-full flex flex-col items-center">
              <div className="relative p-1 rounded-full border-2 border-purple-500/40 bg-gradient-to-b from-purple-500/20 to-transparent">
                <div className="w-[140px] h-[140px] relative rounded-full overflow-hidden">
                  <Image
                    src={mylogo}
                    alt="Krunal Kadu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0c0a24] shadow-md shadow-green-500/50" />
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-100">
                Krunal Kadu
              </h3>
              <p className="text-purple-400 text-xs font-semibold mt-1 tracking-wide">
                Team Lead & Senior Developer
              </p>

              <div className="w-full border-t border-slate-800/80 my-5" />

              <div className="w-full space-y-3.5 text-sm text-slate-300 px-1">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-purple-400 w-4 h-4 shrink-0" />
                  <span className="font-medium text-slate-400">India</span>
                </div>
                <div className="flex items-center gap-3 overflow-hidden">
                  <FiMail className="text-purple-400 w-4 h-4 shrink-0" />
                  <span className="font-medium text-slate-400 truncate">krunalkadu.dev@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Footers */}
            <div className="flex justify-center gap-3 w-full mt-6">
              <a href="https://linkedin.com" target="_blank" className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-500/10 text-slate-400 hover:text-purple-400 transition-all duration-300">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-500/10 text-slate-400 hover:text-purple-400 transition-all duration-300">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-500/10 text-slate-400 hover:text-purple-400 transition-all duration-300">
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Center Content Summary & Skills (Span 6) */}
          <div className="md:col-span-6 flex flex-col gap-5">
            
            {/* Professional Summary Section */}
            <div className="bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FiUser className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-slate-100">
                  Professional Summary
                </h3>
              </div>

              <div className="space-y-3">
                {SUMMARY_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <FiCheck className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills Metric System */}
            <div className="bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <FiCode className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-slate-100">
                  Core Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {SKILLS.map((skill) => {
                  const SkillIcon = skill.icon || FiCode;
                  return (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-slate-300 flex items-center gap-2">
                          <SkillIcon style={{ color: skill.color }} className="w-3.5 h-3.5" />
                          {skill.name}
                        </span>
                        <span className="text-purple-400">{skill.percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800/50">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column 3: Right Side Metrics & Quality Indicators (Span 3) */}
          <div className="md:col-span-3 flex flex-col gap-4">
            
            {/* Top Stat Blocks */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-md">
                <FiBriefcase className="w-5 h-5 text-purple-400 mb-2" />
                <span className="text-2xl font-black tracking-tight text-slate-100">5.5+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-1">Years Experience</span>
              </div>

              <div className="bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-md">
                <FiUsers className="w-5 h-5 text-purple-400 mb-2" />
                <span className="text-2xl font-black tracking-tight text-slate-100">1M+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-1">Users Impacted</span>
              </div>

              <div className="bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-md">
                <FiLayers className="w-5 h-5 text-purple-400 mb-2" />
                <span className="text-2xl font-black tracking-tight text-slate-100">9+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-1">Projects Built</span>
              </div>

              <div className="bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-md">
                <FiAward className="w-5 h-5 text-purple-400 mb-2" />
                <span className="text-2xl font-black tracking-tight text-slate-100">4+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-1">Devs Mentored</span>
              </div>
            </div>

            {/* Bottom Code Quality Percentage Card */}
            <div className="bg-[#0c0a24]/60 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-md flex-1">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <FiCode className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-purple-400 tracking-tight">99%</div>
                <div className="text-xs font-bold text-slate-200">Code Quality</div>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed font-medium">Committed to clean, efficient and maintainable architecture.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Global CTA Actions Row */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={onResumeDownloadClick}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 flex items-center gap-2 transition-all"
          >
            <FiDownload className="w-4 h-4" />
            {isDownloading ? "Downloading..." : "Download Resume"}
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 font-semibold text-sm flex items-center gap-2 transition-all text-slate-200"
          >
            Let's Connect
            <FiArrowRight className="w-4 h-4 text-purple-400" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};