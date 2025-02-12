"use client"

import { animate, useMotionTemplate, useMotionValue, motion } from "framer-motion"
import Image from 'next/image'
import { useEffect, useState } from "react"
import profile from '@/components/assets/main3.png'
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import jsPDF from "jspdf"
import { resume_link } from "@/components/helper/constants"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
export const Hero = () => {
    const [isDownload, setIsDownload] = useState(false)
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(()=>{
        animate(color, COLORS_TOP, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [color])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0 4px 24px ${color}`

    const onResumeDownoload = () => {
      setIsDownload(true)
      const doc = new jsPDF('portrait', 'px', 'a4', false);
      doc.addImage(resume_link, 'JPEG', 0, 0, 420, 653);
      doc.save('Krunal_Resume.pdf');
      setIsDownload(false)
    }
    return(<motion.section id="about" style={{backgroundImage}} className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-20 md:py-24 text-gray-200" >
      <div className="z-10 flex flex-col items-center pt-2 md:pt-5">
       {/* <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-2 text-sm">Open For Work</span> */}
       <h1 className="text-purple-400 text-4xl md:text-7xl font-black">Hi, I am</h1>
       <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent 
      text-4xl md:text-7xl ">Krunal Kadu</h1>
       
       <Image src={profile} width={250} alt="profile pic" className="my-3" />
       <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center item-center space-x-2 mb-2 md:mb-4 px-4">
         <span className="text-5px">React Native | React.js | Next.js</span>
       </div>
           <p className="my-4 md:my-6 max-w-xl text-medium md:text-lg text-center">Software developer with 4+ years of experience in React Native, React.js, TypeScript, Redux, and MobX, building scalable and high-quality applications.</p>

           <motion.button 
           style={{border, boxShadow}}
           className="flex w-fit item-center gap-2 rounded-full px-4 py-2 mb-1"
           whileHover={{scale: 1.015}}
           whileTap={{scale: 0.985}}
           onClick={onResumeDownoload}
           disabled={isDownload}
           >
             Download CV
             <FiArrowRight className="mt-1"/>
           </motion.button>

           <div className="flex md:hidden flex-row gap-4 py-4">
           <motion.a 
               href="https://www.linkedin.com/in/krunal-kadu-996a3912b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
               style={{border, boxShadow}}
               className="flex w-fit item-center gap-2 rounded-full p-2"
               whileHover={{scale: 1.015}}
               whileTap={{scale: 0.985}}
           >
             <FaLinkedinIn className="text-[25px]" style={{ color: "#007ACC"}} />
           </motion.a>
           <motion.a 
               href="https://github.com/Krunalkadu97/"
               style={{border, boxShadow}}
               className="flex w-fit item-center gap-2 rounded-full p-2"
               whileHover={{scale: 1.015}}
               whileTap={{scale: 0.985}}
           >
             <FaGithub className="text-[25px]" style={{ color: "#fff"}} />
           </motion.a>
           <motion.a 
               href="https://medium.com/@krunalkadu97"
               style={{border, boxShadow}}
               className="flex w-fit item-center gap-2 rounded-full p-2"
               whileHover={{scale: 1.015}}
               whileTap={{scale: 0.985}}
           >
             <FaMedium className="text-[25px]" />
           </motion.a>
           <motion.a 
               href="mailto:krunalkadu97@gmail.com"
               style={{border, boxShadow}}
               className="flex w-fit item-center gap-2 rounded-full p-2"
               whileHover={{scale: 1.015}}
               whileTap={{scale: 0.985}}
           >
             <MdEmail className="text-[25px]" style={{ color: "#DD335C"}} />
           </motion.a>
           </div>
       </div>
       <div className="bg-circle-container">
           <div className="bg-circle-background"></div>
           <div className="bg-circle"></div>
       </div>
   </motion.section>)
} 
