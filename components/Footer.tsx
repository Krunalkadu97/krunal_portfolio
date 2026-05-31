"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { services, socialLinks, contactInfo } from "@/components/helper/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] text-white border-t border-slate-900/60 overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 pt-16 pb-8 relative z-10">
        
        {/* Core Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900/80">
          
          {/* Identity Block */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-spin [animation-duration:6s] [mask-image:linear-gradient(transparent,white)]" />
                <div className="absolute inset-[2px] bg-slate-950 rounded-full flex items-center justify-center">
                  <span className="text-xs font-black tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">KK</span>
                </div>
              </div>
              <span className="font-bold tracking-tight text-slate-200 group-hover:text-purple-400 transition-colors duration-200">
                Krunal . Code . Craft
              </span>
            </motion.div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-[240px]">
              Engineering high-performance, pixel-perfect digital products and native application architectures.
            </p>
          </div>

          {/* Dynamic Services Links Block */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.id}>
                  <button className="text-xs sm:text-sm text-slate-400 font-medium hover:text-purple-400 hover:translate-x-1 transition-all duration-200 block text-left">
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Methods Block */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Get In Touch</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium hover:text-purple-400 hover:translate-x-1 transition-all duration-200 group"
                >
                  <IoCallSharp className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  <span>{contactInfo.phone}</span>
                  <FiArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium hover:text-purple-400 hover:translate-x-1 transition-all duration-200 group truncate max-w-full"
                >
                  <MdEmail className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  <span>{contactInfo.email}</span>
                  <FiArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-xs sm:text-sm text-slate-400 font-medium leading-normal">
                <FaHome className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Links Block */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Connect</h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => (
                <a
                  href={item.link}
                  key={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/50 border border-slate-800/60 flex items-center justify-center hover:border-purple-500/30 hover:bg-purple-500/5 hover:scale-105 text-slate-400 transition-all duration-300 shadow-md"
                  aria-label={`Follow Krunal on ${item.name}`}
                >
                  {React.createElement(item.icon, {
                    className: "w-4 h-4 transition-colors duration-200",
                    style: { color: item.color },
                  })}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Sub-Notes Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-medium tracking-wide text-slate-500">
          <p>&copy; {currentYear} Krunal. Code. Craft. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};