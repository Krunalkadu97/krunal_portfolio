"use client";

import React, {useEffect, useRef} from "react";
import { useMotionTemplate, useMotionValue, motion, animate, useScroll } from "framer-motion";
import LiIcon from "@/components/common/LiIcon";

const workexp = [  
    {   
        id: 1, 
        time: 'Sep.2023 - Present',
        position: 'Software Engineer',
        company: 'iProgrammer Solutions Private Limited', 
        address: 'Pune, Maharashtra',
        work: "As a Software Developer, I design and implement innovative features, ensuring optimal performance, scalability, and alignment with business objectives by collaborating closely with cross-functional teams. Throughout the entire software lifecycle—from design to deployment—I follow best practices to deliver high-quality, efficient, and scalable solutions. I proactively identify and resolve issues, optimizing application performance to ensure seamless functionality and provide an exceptional user experience.",
        link: "https://www.iprogrammer.com/"
    },
    {
        id: 2, 
        time: 'Oct.2021 - Sep.2023',
        position: 'Software Developer (Team Lead)',
        company: 'Lise Infotech Pvt Ltd', 
        address: 'Indore, Madhya Pradesh',
        work: "As a Software Developer Team Lead, I collaborated closely with clients to deliver comprehensive solutions, guiding projects from concept through to the final product. I led the development of core application components, taking them from scratch to deployment, ensuring seamless functionality and performance. By streamlining development processes, I ensured the delivery of high-quality outputs while optimizing team efficiency. Additionally, I managed and mentored a team of 5 developers, overseeing task assignments, providing guidance, and conducting code reviews to maintain high standards of code quality and best practices.",
        link: "https://www.liseinfotech.com/"
    },
    {
        id: 3, 
        time: "Jan.2021 - Oct.2021", 
        position: 'React Native Developer',
        company: 'InfoCentroid Software Solutions Pvt. Ltd', 
        address: 'Indore, Madhya Pradesh',
        work: "As a React Native Developer, I assisted in gathering client requirements and contributed to various stages of the development lifecycle. I actively participated in application development, from design through to deployment, ensuring smooth integration of features. I applied best practices to deliver high-quality, reliable solutions and continuously worked to enhance my skills under the guidance of senior team members. My focus was on meeting deadlines while collaborating effectively to contribute to the overall success of the project.",
        link: "https://www.infocentroid.com/"
    },
]
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

type DetailsP = {
    time: string;
    position: string;
    company: string;
    description: string;
    place: string;
    link: string;
};
const Details = ({time, position, company, description, place, link}: DetailsP)=>{
    const ref = useRef(null);
    return(<li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between">
        <LiIcon ref={ref} />
        <motion.section 
            initial={{y: 50}}
            whileInView={{y:0}}
            transition={{
                duration: 0.6,
                type: 'spring'
            }}
        >
            <h3 className="capitalize font-bold text-lg md:text-2xl">{position}&nbsp;
                <a href={link} target="_blank"
                className="text-purple-300 capitalize"
            > <br/>@{company}</a>
            </h3>
            <span className="capitalize font-medium text-sm md:text-lg text-white/85 py-2">
                {time} | {place}
            </span>
            <p className="font-medium text-sm md:text-lg w-full">
               {description}
            </p>
        </motion.section >
    </li>);
}

export const WorkExperience = () => {
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
            id="workexperience" 
            className="py-32 text-white"
            style={{backgroundImage}}
        >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 w-full pl-8">WORK EXPERIENCE</h2>   
          
         <div ref={ref} className="w-full mx-auto relative md:mx-6"> 
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-1 w-[4px] h-full bg-purple-400 origin-top"
            />

            <ul className="w-full flex flex-col items-start justify-between ml-4">
                {workexp.map((exp, index)=>(
                    <Details
                        key={index}
                        description={exp.work}
                        position={exp.position}
                        time={exp.time}
                        company={exp.company}
                        place={exp.address}
                        link={exp.link}
                    />
                ))}
                
            </ul>
         </div>
        </motion.section>
    )
}

/**
 *   <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 ml-4 md:mb-0 sm:ml-0">
                    <h2 className="text-4xl sticky top-20 sm:6xl font-bold mb-10">WORK <br/> <span className="text-purple-400">EXPERIENCE</span></h2>
                </div>
                <div className="md:w-3/4">
        
        {projects.map((project) => (
            <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer mb-8 group glass p-2 px-4 mx-2 sm:mx-0"
            >

                            <p className="text-gray-400 text-base sm:text-lg mb-2">{project.joined} - {project.last_day}</p>
                            <h3 className={`text-xl sm:text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                            ${selectedProject.id === project.id ? "text-gray-200":""} duration-300 mb-2`}>
                                {project.designation}
                            </h3>
                 
                <div className="flex flex-row items-center">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                            width={50}
                            height={50}
                        />
                <h3 className={`text-lg sm:text-xl ml-4 font-semibold group-hover:text-purple-300 transition-colors 
                ${selectedProject.id === project.id ? "text-gray-200":""} duration-300`}>
                    {project.title}
                </h3>
                </div>
                {selectedProject.id === project.id &&(
                    <div className="border-b-2 border-gray-200 my-4"></div>
                )}
                {selectedProject.id === project.id &&(
                    <>
                    {
                       project?.description&& project?.description.map((item,index)=>(
                            <div key={index} className="flex flex-row transition-all duration-500 ease-in-out my-1">
                                <ImPointRight className="mt-1 mr-2" height={16} /> 
                                <p className="text-gray-400">
                                    {item}
                                </p>
                            </div>
                        ))
                  
                    }
                    </>
                  
                )}
            </div>
        ))}
       
    </div>
            </div>
 */