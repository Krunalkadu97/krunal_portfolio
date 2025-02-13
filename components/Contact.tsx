"use client";

import { motion } from "framer-motion";
import EmailSection from "@/components/EmailSection";
import { contactInfo } from "@/components/helper/constants";

export const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <section
      id="contact"
      className="overflow-x-clip py-32 text-white mx-auto relative"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 blur-lg"></div>
      </div>

      <motion.div className="container mx-auto" {...fadeInUp}>
      <div className="grid w-full md:grid-cols-8 gap-16">
        {/* Left Section */}
        <div className="space-y-12 col-span-3">
          <motion.h2
            className="text-4xl sm:text-5xl ml-4 md:ml-0 text-left font-bold text-gray-300"
            {...fadeInUp}
          >
            Get in <span className="text-purple-300">touch</span>
          </motion.h2>

          <motion.div
            className="rounded-2xl space-y-8 mx-2 md:mx-0"
            {...fadeInUp}
          >
            {/* Phone */}
            <div className="space-y-2 bg-[#181818]/60 rounded-2xl p-4">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href={`tel:${contactInfo.phone}`}
                aria-label="Call Krunal Kadu"
                className="text-xl lg:text-2xl font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
              >
                {contactInfo.phone}
                <span className="text-gray-500">➚</span>
              </a>
            </div>

            {/* Email */}
            <div className="space-y-2 bg-[#181818]/60 rounded-2xl p-4">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email Krunal Kadu"
                className="text-xl lg:text-2xl font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
              >
                 {contactInfo.email}
                <span className="text-gray-500">➚</span>
              </a>
            </div>

            {/* Address */}
            <div className="space-y-2 bg-[#181818]/60 rounded-2xl p-4">
              <p className="text-lg text-gray-300">Address</p>
              <address className="text-xl lg:text-2xl not-italic leading-relaxed">
              {contactInfo.address}
              </address>
            </div>
          </motion.div>
        </div>

        {/* Right Section: Contact Form */}
        <motion.div
          className="col-span-4 space-y-8 p-4 rounded-2xl relative"
          {...fadeInUp}
        >
          <EmailSection />
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
