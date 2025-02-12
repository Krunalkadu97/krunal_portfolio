"use client"

import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const navLinks = [
    {title: 'About', path: '#about'},
    {title: 'Stack', path: '#stack'},
    {title: 'Experience', path: '#workexperience'},
    {title: 'Portfolio', path: '#portfolio'},
    {title: 'Contact', path: '#contact'},
]

type MenuProps = {
    children: React.ReactNode;
    href: string;
    index: number;
};
const MenuItems = ({children, href, index}:MenuProps) => {
    return(<motion.a 
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        whileHover={{scale: 1.06}}
        whileTap={{scale: 0.95}}
        transition={{
            delay: index * 0.1,
            duration: 0.3,
            ease: 'easeOut'
        }}
    href={href}
    className='relative overflow-hidden px-2 py-1'
    >
        <span className='text-white/90 hover:text-purple-300 transition-colors'>{children}</span>
    </motion.a>)
}
export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav);
    const closeNav = () => setNav(false);


    return(
       <motion.nav 
       initial={{y:-100}}
       animate={{y:0}}
       className='fixed w-full z-50 bg-black/50 text-white backdrop-blur-2xl transition-all duration-300 ease-out'>
            <div className='max-w-7xl mx-auto px-6 py-3'>
                <div className='flex items-center justify-between'>
                    <motion.div 
                    whileHover={{scale: 1.06}}
                    className='flex flex-row items-center gap-4 group'>
                        <div className='relative h-10 w-10 rounded-full overflow-hidden'>
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-slate-500 animate-spin [mask-image:linear-gradient(transparent, white)]'>
                               
                            </div>
                            <div className='absolute inset-[2px] bg-[#000] rounded-full flex items-center justify-center'>
                                    <span className='font-bold bg-gradient-to-r from-purple-500 to-slate-500 bg-clip-text text-transparent'>KK</span>
                            </div>
                        </div>
                        <span className='font-semibold text-white/80 group-hover:text-purple-300 transition-colors'>Krunal . Code . Craft</span>
                    </motion.div>
                    <div className='hidden md:flex items-center gap-6'>
                        <div className='flex items-center gap-6 bg-[#181818] px-4 py-2 rounded-full border border-white/20 shadow-lg shadow-white/10'>
                            {navLinks.map((items, index)=>(
                                <MenuItems 
                                    key={items.title} 
                                    index={index} 
                                    href={items.path}
                                >
                                   {items.title}
                                </MenuItems>))}
                        </div>
                    </div>
                    <div className='h-6 w-px bg-white/20 mx-2'></div>
                    <div className='hidden md:flex flex-row gap-4'>
                        <a 
                            href="https://www.linkedin.com/in/krunal-kadu-996a3912b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            className='p-2 rounded-lg bg-white/20 hover:bg-[#181818] transitions-colors group'>
                            <FaLinkedinIn className="text-[25px]" style={{ color: "#007ACC"}} />
                        </a>
                        <a 
                        href="https://github.com/Krunalkadu97/"
                        className='p-2 rounded-lg bg-white/20 hover:bg-[#181818] transitions-colors group'>
                            <FaGithub className="text-[25px]" style={{ color: "#fff"}} />
                        </a>
                        <a 
                        href="https://medium.com/@krunalkadu97"
                        className='p-2 rounded-lg bg-white/20 hover:bg-[#181818] transitions-colors group'>
                            <FaMedium className="text-[25px]" />
                        </a>
                    </div>
                    <div onClick={toggleNav} className='md:hidden border rounded z-50 text-white/70 border-white/70 p-2'>
                        {nav ? <AiOutlineClose className='h-6 w-6' /> : <AiOutlineMenu className='h-6 w-6'/>}
                    </div>
                </div>
               {nav &&(
                <motion.div
                    initial={{opacity: 0, y:-10}}
                    animate={{opacity: 1, y:0}}
                    className='md:hidden mt-4 pb-4 space-y-4'
                >
                    {navLinks.map((link, index)=>(
                        <a 
                            href={link.path} 
                            key={index} 
                            onClick={closeNav}
                            className='block px-4 py-2 text-white/80 hover:text-purple-300 hover:bg-[#18181F] rounded-xl transitions-colors'
                        >
                            {link.title}   
                        </a>
                    ))}
                    <div className='pt-4 border-t border-t-white/30 flex gap-4'>
                        <a 
                            href="https://www.linkedin.com/in/krunal-kadu-996a3912b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            className='p-2 rounded-lg bg-white/20 hover:bg-[#181818] transitions-colors group'>
                            <FaLinkedinIn className="text-[25px]" style={{ color: "#007ACC"}} />
                        </a>
                        <a 
                        href="https://github.com/Krunalkadu97/"
                        className='p-2 rounded-lg bg-white/20 hover:bg-[#181818] transitions-colors group'>
                            <FaGithub className="text-[25px]" style={{ color: "#fff"}} />
                        </a>
                        <a 
                        href="https://medium.com/@krunalkadu97"
                        className='p-2 rounded-lg bg-white/20 hover:bg-[#181818] transitions-colors group'>
                            <FaMedium className="text-[25px]" />
                        </a>
                    </div>
                </motion.div>
            )}
            </div>
       </motion.nav>
    )
}
