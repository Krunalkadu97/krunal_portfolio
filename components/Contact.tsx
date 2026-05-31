"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight, FiSend, FiCheckCircle } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";

// Local Constants Mock (Keeps code modularized & matching your constants architecture)
const contactInfo = {
  phone: "+91 8308082945",
  email: "krunalkadu97@gmail.com",
  address: "Pune, Maharashtra",
};

export const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#030014] text-white overflow-hidden">
      
      {/* Premium Ambient Background Radial Light Reflection Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Metadata Side Column Block (Span 5) */}
          <motion.div className="lg:col-span-5 space-y-10" {...fadeInUp}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
                <span className="text-[11px] font-semibold tracking-wider text-purple-400 uppercase flex items-center gap-1.5">
                  <FiMail className="w-3 h-3" /> Communication Axis
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Get in <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">touch</span>
              </h2>
            </div>

            {/* Micro-Contact Cards Stack */}
            <div className="space-y-4">
              
              {/* Phone Utility */}
              <a 
                href={`tel:${contactInfo.phone}`}
                aria-label="Call Krunal Kadu"
                className="block p-5 bg-[#0c0a24]/30 border border-slate-900 rounded-xl group hover:border-purple-500/20 hover:bg-[#0c0a24]/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-all duration-300">
                      <FiPhone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</p>
                      <p className="text-base sm:text-lg font-bold text-slate-200 mt-0.5">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <FiArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>

              {/* Email Utility */}
              <a 
                href={`mailto:${contactInfo.email}`}
                aria-label="Email Krunal Kadu"
                className="block p-5 bg-[#0c0a24]/30 border border-slate-900 rounded-xl group hover:border-purple-500/20 hover:bg-[#0c0a24]/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-all duration-300">
                      <FiMail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                      <p className="text-base sm:text-lg font-bold text-slate-200 mt-0.5 break-all">{contactInfo.email}</p>
                    </div>
                  </div>
                  <FiArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>

              {/* Address Utility */}
              <div className="p-5 bg-[#0c0a24]/30 border border-slate-900 rounded-xl flex items-center gap-4 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Address</p>
                  <address className="text-base sm:text-lg font-bold text-slate-200 mt-0.5 not-italic">{contactInfo.address}</address>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Input Form Column Block (Span 7) */}
          <motion.div className="lg:col-span-7 bg-[#050212]/50 border border-slate-900 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-black/50" {...fadeInUp}>
            <EmailSection />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

function EmailSection() {
  const [state, handleSubmit] = useForm("xpwqjkdp");

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-4 space-y-6"
      >
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.1)]">
          <FiCheckCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-100">Thank you for reaching out!</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed font-medium">
            Your message has been processed securely. I review transmissions daily and will respond shortly.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form className="space-y-6 w-full" onSubmit={handleSubmit}>
      
      {/* Email Input Field */}
      <div className="space-y-2 w-full">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Your Email</label>
        <input 
          name="email"
          type="email" 
          id="email" 
          required 
          placeholder="name@example.com"
          className="w-full bg-[#0a071e]/60 border border-slate-800/80 placeholder-slate-600 text-slate-100 text-sm rounded-xl block p-3.5 outline-none transition-all focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 font-medium"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="mt-1.5 text-xs font-semibold text-rose-500 flex items-center"
        />
      </div>

      {/* Concern/Subject Input Field */}
      <div className="space-y-2 w-full">
        <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Concern</label>
        <input 
          name="subject" 
          type="text" 
          id="subject"  
          placeholder="Project collaboration inquiry"
          className="w-full bg-[#0a071e]/60 border border-slate-800/80 placeholder-slate-600 text-slate-100 text-sm rounded-xl block p-3.5 outline-none transition-all focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 font-medium"
        />
      </div>

      {/* Main Content Message Area Text-field */}
      <div className="space-y-2 w-full">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Message</label>
        <textarea 
          name="message"
          id="message"  
          required
          placeholder="Detail your requirements here..."
          className="w-full bg-[#0a071e]/60 border min-h-[140px] border-slate-800/80 placeholder-slate-600 text-slate-100 text-sm rounded-xl block p-3.5 outline-none transition-all focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 resize-none font-medium leading-relaxed"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="mt-1.5 text-xs font-semibold text-rose-500 flex items-center"
        />
      </div>

      {/* Interactive Form Submit CTA Trigger Button */}
      <button 
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 disabled:from-slate-800 disabled:to-slate-900 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider group disabled:cursor-not-allowed"
      >
        <span>{state.submitting ? "Sending..." : "Send Message"}</span>
        {!state.submitting && <FiSend className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
      </button>

    </form>
  );
}