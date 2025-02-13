"use client"

import React from "react";
import {motion} from "framer-motion"
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { services, socialLinks, contactInfo } from "@/components/helper/constants";


export const Footer = () => {
   
    return(<footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-10 mx-auto">
            <div className="block md:flex items-start justify-between mb-4">
                   <motion.div 
                        whileHover={{scale: 1.06}}
                        className='flex flex-row items-center gap-4 group my-2'>
                            <div className='relative h-10 w-10 rounded-full overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-slate-500 animate-spin [mask-image:linear-gradient(transparent, white)]'>
                                               
                                </div>
                                <div className='absolute inset-[2px] bg-[#000] rounded-full flex items-center justify-center'>
                                    <span className='font-bold bg-gradient-to-r from-purple-500 to-slate-500 bg-clip-text text-transparent'>KK</span>
                                </div>
                            </div>
                            <span className='font-semibold text-white/80 group-hover:text-purple-300 transition-colors'>Krunal . Code . Craft</span>
                </motion.div>
                <div className="my-2">
                    <h1 className="text-sm font-bold text-white mb-2">Services</h1>
                    <div>
                        {services.map((item)=>(
                            <p key={item.id} className="text-medium text-sm text-white/90 my-1">{item.title}</p>
                        ))}
                    </div>
                </div>
                <div className="my-2">
                    <h1 className="text-sm font-bold text-white mb-2">Get In Touch</h1>
                    <div>
                    <div className="space-y-2 my-2">
                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="text-sm text-white/90 font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
                            >
                                <IoCallSharp />
                                {contactInfo.phone}
                                <span className="text-gray-500">➚</span>
                            </a>
                        </div>
                        <div className="space-y-2 my-2">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-sm text-white/90 font-semibold hover:text-purple-300 transition duration-300 flex items-center gap-2"
                            >
                                <MdEmail />
                                {contactInfo.email}
                                <span className="text-gray-500">➚</span>
                            </a>
                        </div>
                        <div className="space-y-2 my-2">
                            <address
                                className="text-sm text-white/90 not-italic leading-relaxed flex items-center gap-2"
                            >
                                <FaHome />
                                {contactInfo.address}
                            </address>
                        </div>

                    </div>
                </div>
                <div className="my-2">
                    <h1 className="text-sm font-bold text-white mb-2">Follow Me on</h1>
                    <div className="flex flex-row gap-4  py-4 items-center justify-start mb-2">
                    {
                        socialLinks.map((item)=>(
                            <a 
                            href={item.link} key={item.name}
                            className='p-2 rounded-lg bg-white/20 hover:bg-[#181818] transitions-colors group'>
                                {React.createElement(item.icon, { className:"text-[25px]",style: { color: item.color }})}
                            </a>
                        ))
                    }
                    </div>
                </div>
            </div>
            
            
            <p className="text-slate-200 md:text-center border-t border-t-white/30 py-5">&copy; {new Date().getFullYear()} Krunal. Code. Craft.  All Rights Reserved.</p>
        </div>
    </footer>)
}