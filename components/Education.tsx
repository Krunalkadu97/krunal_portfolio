"use client";

import React, {useEffect, useRef} from "react";
import { useMotionTemplate, useMotionValue, motion, animate, useScroll } from "framer-motion";
import LiIcon from "@/components/common/LiIcon";

const education = [  
    {   
        id: 1,
        type: 'Bachelor of Engineering in Information Technology', 
        time: '2015 - 2019',
        place: 'Sinhgad College of Enfineering, Pune, Maharashtra',
        info: 'I earned a B.E. in Information Technology, gaining a strong foundation in software development and data management, with hands-on experience in scalable applications.',
    },
    {
        id: 2, 
        type: 'Higher Secondary Education (HSC)',
        time: '2014 - 2015', 
        place: 'Narayana Junior College, Hyderabad, Telangana',
        info: 'Completed my Higher Secondary education with a strong emphasis on Mathematics, Physics, and Chemistry.',
    },
    {
        id: 3, 
        type: 'Secondary School Certificate (SSC)',
        time: '2012 - 2013',
        place: 'Lakhotiya Bhutada High School, Nagpur, Maharashtra',
        info: 'Successfully completed my Secondary School education with a strong foundation in Mathematics, Science, and Computer Studies. This phase helped me develop logical thinking, problem-solving skills, and a keen interest in technology, which later guided my academic and professional journey in Information Technology.'
    },
]
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

type DetailsP = {
    type: string;
    place: string;
    time: string;
    info: string;
};
const Details = ({type, time, place, info}: DetailsP)=>{
    const ref = useRef(null);
    return(<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon ref={ref} />
        <motion.section 
            initial={{y: 50}}
            whileInView={{y:0}}
            transition={{
                duration: 0.6,
                type: 'spring'
            }}
        >
            <h3 className="capitalize font-bold text-2xl ">{type}</h3>
            <span className="capitalize font-medium text-white/85">
                {time} | {place}
            </span>
            <p className="font-medium w-full">{info}</p>
        </motion.section >
    </li>);
}

export const Education = () => {
    const ref = useRef(null);
    const color = useMotionValue(COLORS_TOP[0])
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:['start end', "center start"]
    });
   

    useEffect(()=>{
        animate(color, COLORS_TOP, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [color])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    return(
        <motion.section 
            className="py-32 text-white"
            style={{backgroundImage}}
        >
        <h2 className="text-4xl sm:6xl font-bold mb-10 w-full text-center">EDUCATION</h2>   
          
         <div ref={ref} className="w-[75%] mx-auto relative"> 
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-1 w-[4px] h-full bg-purple-400 origin-top"
            />

            <ul className="w-full flex flex-col items-start justify-between ml-4">
                {education.map((edu, index)=>(
                    <Details
                        key={index}
                        type={edu.type}
                        time={edu.time}
                        place={edu.place}
                        info={edu.info}
                    />
                ))}
                
            </ul>
         </div>
        </motion.section>
    )
}
