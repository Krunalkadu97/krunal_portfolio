"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

import {
  FaReact,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

import profile from "@/components/assets/profile3.png";

const TECH_STACK = [
  "React Native",
  "React.js",
  "Next.js",
  "TypeScript",
  "AI Tools",
];


export const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");

    link.href = "/resume.pdf";
    link.download = "Krunal_Kadu_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        pt-24
        lg:pt-32
      "
    >
      <div className="hero-bg" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 w-full relative z-10">
        <div
          className="
            grid
            lg:grid-cols-[1.25fr_0.75fr]
            gap-8
            xl:gap-12
            items-center
          "
        >
          {/* LEFT CONTENT */}

          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/20
                bg-green-500/10
                px-4
                py-2
                text-green-400
                text-sm
                font-medium
              "
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Available For Opportunities
            </div>

            <h1
              className="
                mt-8
                font-black
                tracking-tight
                leading-[0.9]
                text-4xl
                sm:text-5xl
                lg:text-7xl
                xl:text-[5.5rem]
                2xl:text-[6.5rem]
              "
            >
              <span className="block text-purple-400">
                Team Lead &
              </span>

              <span className="block text-white">
                Senior Software
              </span>

              <span className="block text-white">
                Developer
              </span>
            </h1>

            {/* TECH STACK */}

            <div
              className="
                flex
                flex-wrap
                gap-3
                mt-8
                max-w-2xl
              "
            >
              {TECH_STACK.map((item) => (
                <span
                  key={item}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-sm
                    text-gray-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* MOBILE IMAGE */}

            <div className="flex justify-center lg:hidden my-10">
              <Image
                src={profile}
                alt="Krunal Kadu"
                priority
                className="
                  w-[280px]
                  sm:w-[360px]
                  object-contain
                "
              />
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                max-w-xl
                xl:max-w-2xl
                text-base
                md:text-lg
                leading-relaxed
                text-gray-400
              "
            >
              5.5+ years building scalable mobile and web
              applications using React Native, React.js,
              Next.js and TypeScript. Passionate about
              clean architecture, performance optimization,
              team leadership and AI-assisted development.
            </p>

            {/* CTA */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-10
                max-w-xl
              "
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  primary-btn
                  px-8
                  py-4
                  rounded-2xl
                  text-white
                  font-semibold
                  flex
                  items-center
                  gap-2
                "
              >
                View Projects
                <FiArrowRight />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResumeDownload}
                className="
                  secondary-btn
                  px-8
                  py-4
                  rounded-2xl
                  text-white
                  font-semibold
                  flex
                  items-center
                  gap-2
                "
              >
                <FiDownload />
                Download Resume
              </motion.button>
            </div>

          </div>

          {/* RIGHT SIDE */}

         {/* RIGHT SIDE */}

<div
  className="
    hidden
    lg:flex
    justify-center
    items-center
    relative
    h-[650px]
  "
>
  {/* Glow */}
  <div className="profile-glow" />

  {/* Outer Ring */}
  <div
    className="
      absolute
      w-[520px]
      h-[520px]
      xl:w-[600px]
      xl:h-[600px]
      rounded-full
      border
      border-white/10
      bg-white/[0.02]
      backdrop-blur-xl
    "
  />

  {/* Profile Circle */}
  <div
    className="
      relative
      z-10
      w-[450px]
      h-[450px]
      xl:w-[520px]
      xl:h-[520px]
      rounded-full
      overflow-hidden
      flex
      items-center
      justify-center
      bg-gradient-to-b
      from-purple-500/10
      to-transparent
    "
  >
    <Image
      src={profile}
      alt="Krunal Kadu"
      priority
      className="
        object-contain
        w-[320px]
        xl:w-[400px]
        2xl:w-[430px]
        h-auto
        translate-y-8
      "
    />
  </div>

  {/* React */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute top-20 left-0 glass-card"
  >
    <FaReact className="text-cyan-400 text-3xl" />
  </motion.div>

  {/* TypeScript */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute bottom-24 left-8 glass-card"
  >
    <SiTypescript className="text-blue-500 text-3xl" />
  </motion.div>

  {/* Next */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute top-20 right-0 glass-card"
  >
    <SiNextdotjs className="text-white text-3xl" />
  </motion.div>

  {/* Redux */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 5.5, repeat: Infinity }}
    className="absolute bottom-24 right-8 glass-card"
  >
    <SiRedux className="text-purple-500 text-3xl" />
  </motion.div>
</div>
        </div>
      </div>
    </section>
  );
};