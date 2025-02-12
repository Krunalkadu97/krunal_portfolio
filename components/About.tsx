"use client"

import React,{useState} from "react"
import Image from "next/image"
import mylogo from "@/components/assets/My.png"
import { motion } from "framer-motion"
import { KeyMetrics } from "@/components/KeyMetrics";
import { FiArrowRight } from "react-icons/fi";
import { resume_link } from "@/components/helper/constants"
import jsPDF from "jspdf"


export const About = () => {
    const [isDownload, setIsDownload] = useState(false)

     const onResumeDownoload = () => {
          setIsDownload(true)
          const doc = new jsPDF('portrait', 'px', 'a4', false);
          doc.addImage(resume_link, 'JPEG', 0, 0, 420, 653);
          doc.save('Krunal_Resume.pdf');
          setIsDownload(false)
    }
    return(
        <section className="px-4 py-32">
            <main className="container mx-auto text-white flex flex-col w-full items-center justify-center">

                <h1 className="text-4xl md:text-5xl text-center text-white/90 font-bold mb-16">Innovate with Passion, Engineer with Purpose!</h1> 
                <div className="grid w-full md:grid-cols-8 gap-16">

                    <div className="col-span-3 flex flex-col items-start justify-start gap-y-6">
                        <h2 className="mb-4 text-lg font-bold uppercase text-slate-300">About Me</h2>
                        <div>
                            <p className="font-medium text-white/70">
                                I am a Software Developer with over 4 years of experience specializing in <span className="font-bold">React Native, React, and Next.js</span>. Passionate about building high-quality, scalable applications, I focus on delivering seamless user experiences across web and mobile platforms.
                            </p>
                            <p className="font-medium text-white/70 my-6">
                                With deep expertise in TypeScript, Redux, MobX, and modern state management solutions, I have successfully built and optimized applications that enhance user engagement, reduce load times, and improve maintainability. My experience spans across end-to-end application development, API integrations, and performance optimizations, ensuring that every product I develop meets the highest standards of efficiency and scalability.
                            </p>
                            <p className="font-medium text-white/70">
                                Beyond coding, I bring strong leadership and collaboration skills, having led development teams to ship high-quality, innovative solutions. I thrive in agile environments, working closely with designers, product managers, and stakeholders to translate business requirements into robust technical solutions.
                            </p>
                            <p className="font-medium text-white/70">

                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-4 mt-10">
                                <motion.button 
                                   className="flex w-fit item-center gap-2 text-purple-500 rounded-full px-4 py-2 mb-1 border-2 border-purple-500"
                                   whileHover={{scale: 1.015}}
                                   whileTap={{scale: 0.985}}
                                   onClick={onResumeDownoload}
                                   disabled={isDownload}
                                >
                                     Download CV
                                     <FiArrowRight className="mt-1"/>
                                </motion.button>
                                <motion.a 
                                   className="flex w-fit item-center gap-2 text-white rounded-full px-4 py-2 mb-1 border-2 border-[#181818]"
                                   whileHover={{scale: 1.015}}
                                   whileTap={{scale: 0.985}}
                                   href="#contact"
                                >
                                     Hire Me
                                     <FiArrowRight className="mt-1"/>
                                </motion.a>
                        </div>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-white/40 bg-[#000] p-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-white/30"/>
                        <Image 
                            src={mylogo}
                            alt="Profile image"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                    <div className="col-span-3 md:col-span-2 flex flex-col items-end justify-between">
                      <KeyMetrics />
                    </div>
                </div>
            </main>
        </section>
    )
}
