"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSmartphone, FiGlobe, FiLayers, FiArrowRight } from "react-icons/fi";

// Mocking constants locally to match your workspace setup architecture 
// and fix the typography hierarchy noted in Screenshot 2026-05-31 at 7.34.47 PM.png
const servicesList = [
  {
    id: "01",
    title: "Mobile App Development",
    desc: "We build highly performant, scalable mobile applications engineered with native capabilities to maximize business efficiency and client engagement metrics.",
    icon: FiSmartphone,
    gradient: "from-purple-500/20 to-indigo-500/5",
    accentColor: "text-purple-400"
  },
  {
    id: "02",
    title: "Web Development",
    desc: "We engineer production-grade websites that serve as powerful, high-conversion marketing instruments designed to deliver memorable brand experiences.",
    icon: FiGlobe,
    gradient: "from-emerald-500/20 to-teal-500/5",
    accentColor: "text-emerald-400"
  },
  {
    id: "03",
    title: "UI/UX Design",
    desc: "We craft intentional user interfaces and clear user experiences that match modern platform expectations, eliminate frictional barriers, and empower business growth frameworks.",
    icon: FiLayers,
    gradient: "from-pink-500/20 to-rose-500/5",
    accentColor: "text-pink-400"
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#030014] text-white overflow-hidden">
      
      {/* Premium Ambient Light Rays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Sticky Header Block (Span 4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
              <span className="text-[11px] font-semibold tracking-wider text-purple-400 uppercase">
                Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
              Services
            </h2>
            <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm pt-2">
              Delivering high-performance, pixel-perfect engineering and user-centered design frameworks.
            </p>
          </div>

          {/* Right Column Services Cards Stack List Block (Span 8) */}
          <div className="lg:col-span-8 space-y-6">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative p-6 sm:p-8 bg-[#0c0a24]/20 border border-slate-900/60 hover:border-purple-500/20 rounded-2xl transition-all duration-300 backdrop-blur-sm overflow-hidden flex flex-col sm:flex-row items-start gap-6`}
                >
                  {/* Subtle hover background gradient track glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

                  {/* Left Identity Group Element (Icon & Number Layout Matrix) */}
                  <div className="flex sm:flex-col justify-between items-center sm:items-start w-full sm:w-auto shrink-0 relative z-10 gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-center ${service.accentColor} group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-300 shadow-inner`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-black text-slate-600 group-hover:text-purple-400/50 transition-colors duration-300 tracking-widest pl-1">
                      {service.id}
                    </span>
                  </div>

                  {/* Right Descriptive Copy Framework Content Element */}
                  <div className="space-y-2 flex-grow relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors duration-200">
                        {service.title}
                      </h3>
                      <FiArrowRight className="w-5 h-5 text-slate-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-purple-400 transition-all duration-300 shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
                      {service.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};