"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#stack" },
  { title: "Experience", path: "#workexperience" },
  { title: "Projects", path: "#portfolio" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
            flex
            items-center
            justify-between
            h-20
            px-6
            rounded-[28px]
            border
            border-white/10
            bg-black/40
            backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(0,0,0,0.4)]
          "
        >
          {/* LOGO */}
          <a
            href="#about"
            className="flex items-center gap-4"
          >
            <div
              className="
                w-12
                h-12
                rounded-full
                border
                border-purple-500/50
                flex
                items-center
                justify-center
              "
            >
              <span className="font-bold text-purple-400">
                KK
              </span>
            </div>

            <div>
              <h3 className="text-white font-semibold">
                Krunal
              </h3>

              <p className="text-xs text-gray-400">
                Code • Craft • Create
              </p>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
              px-8
              py-4
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="
                  text-gray-300
                  hover:text-purple-400
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* SOCIALS */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="
                w-12
                h-12
                rounded-xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-purple-500/10
                transition-all
              "
            >
              <FaLinkedinIn
                className="text-xl"
                color="#0A66C2"
              />
            </a>

            <a
              href="https://github.com/Krunalkadu97"
              target="_blank"
              className="
                w-12
                h-12
                rounded-xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-purple-500/10
                transition-all
              "
            >
              <FaGithub
                className="text-xl text-white"
              />
            </a>

            <a
              href="https://medium.com"
              target="_blank"
              className="
                w-12
                h-12
                rounded-xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-purple-500/10
                transition-all
              "
            >
              <FaMedium
                className="text-xl text-white"
              />
            </a>
          </div>

          {/* MOBILE MENU */}
          <button
            onClick={() => setNav(!nav)}
            className="
              md:hidden
              w-12
              h-12
              rounded-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              bg-white/5
            "
          >
            {nav ? (
              <AiOutlineClose className="text-xl" />
            ) : (
              <AiOutlineMenu className="text-xl" />
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              md:hidden
              mt-4
              rounded-3xl
              border
              border-white/10
              bg-black/80
              backdrop-blur-2xl
              p-6
            "
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  onClick={() => setNav(false)}
                  className="
                    text-gray-300
                    hover:text-purple-400
                    transition-colors
                  "
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <FaLinkedinIn className="text-2xl text-[#0A66C2]" />
              <FaGithub className="text-2xl text-white" />
              <FaMedium className="text-2xl text-white" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};