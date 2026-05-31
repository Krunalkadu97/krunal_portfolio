"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

interface DeploymentLink {
  link: string;
  logo: React.ElementType;
  color: string;
}

interface ProjectDescription {
  Description: string;
  Deployed: DeploymentLink[];
  TechStack?: string[]; // Optional helper to supply micro-badges cleanly
}

interface ProjectCardProps {
  imgUrl: { src: string } | string;
  title: string;
  description: ProjectDescription;
}

export const ProjectCard = ({ imgUrl, title, description }: ProjectCardProps) => {
  const imageSource = typeof imgUrl === "string" ? imgUrl : imgUrl.src;

  return (
    <div className="group flex flex-col w-full bg-[#0c0a24]/20 border border-slate-900 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-purple-500/20 hover:bg-[#0c0a24]/40 transition-all duration-300 shadow-xl shadow-black/40">
      
      {/* Aspect-Ratio Guarded Media Container - Parent must be relative for fill attribute */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-900/80">
        <Image
          src={imageSource}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 z-10" />

        {/* Hardware-Accelerated Interactive Action Overlay */}
        <div className="absolute inset-0 bg-[#050212]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
          {description.Deployed?.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 border border-slate-800 bg-slate-950 rounded-full flex items-center justify-center hover:border-purple-400 hover:scale-110 text-slate-400 transition-all duration-200 shadow-md"
              style={{ "--hover-color": item.color } as React.CSSProperties}
            >
              {React.createElement(item.logo, {
                className: "w-5 h-5 transition-colors duration-200",
                style: { color: item.color },
              })}
            </a>
          ))}
        </div>
      </div>

      {/* Description Meta Content Area Block (Pushes footer using flex-grow) */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-5">
        <div className="space-y-2.5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold tracking-tight text-slate-200 group-hover:text-purple-400 transition-colors duration-200 leading-snug">
              {title}
            </h3>
            <FiArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
            {description.Description}
          </p>
        </div>

        {/* Automatic Structural Tech Badges Footer */}
        {description.TechStack && description.TechStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-900/60">
            {description.TechStack.map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-500/5 border border-purple-500/10 text-purple-400/90 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};